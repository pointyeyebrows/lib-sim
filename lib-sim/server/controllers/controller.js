module.exports = {
    
    getBooks: (req,res,next) => {
        const db = req.app.get("db")
        db.getBooks().then( response => res.status(200).send(response) )
    },deleteFromBooks: (req, res, next) => {
        let {id} = req.params
        id = parseInt(id)
        const db = req.app.get("db")
        console.log(typeof id, id)
    db.deleteBook([id]).then(response => res.status(200).send(response))
    }
}