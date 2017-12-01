module.exports = {
    getBooks: (req,res,next) => {
        const db = req.app.get("db")
        db.getBooks().then( response => res.status(200).send(response) )
    }
}