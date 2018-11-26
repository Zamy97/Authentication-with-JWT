module.exports = (app) => {
    //SIGN UP form
    app.get("/sign-up", (req, res) => {
        res.render("sign-up.hbs")
    })

    //SIGN UP POST

    app.post("/sign-up", (req, res) => {
        console.log(req.body);
    })
}
