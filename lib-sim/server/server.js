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

      
const app =express();
massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
})
app.use(bodyParser.json());


//------books-----//
app.get('/getBooks',ctrl.getBooks)



const PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `));