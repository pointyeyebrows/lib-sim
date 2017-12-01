require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
      axios = require('axios');
      ctrl = require('./controllers/controller.js')
     
      require('dotenv').config();

      
const app =express();
massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
})
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => { console.log(req.method, req.url); next(); })

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');

        db.selectUser([profile.identities[0].user_id])
            .then(user => {
                if (user[0]) {
                    return done(null, user[0].id)
                }
                else {
                    const user = profile._json;
                    db.addUser([user.given_name, user.family_name, user.identities[0].user_id])
                        .then(user => {
                            return done(null, user[0].id);
                        })
                }
            })

    }))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3001/browser',
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User Not Found');
    }
    else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3001/')
})





//------books-----//
app.get('/getBooks',ctrl.getBooks)
app.delete('/books/delete/:id', ctrl.deleteFromBooks)

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    app.get('db').find_current_user([id])
        .then(user => {

            done(null, user[0]);
        })

})

const PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `));