const Users = require("../models/User");

getUsers =('/',async (req, res) => {
    try {
        var user = await Users.find();
        res.render('users.ejs',{
            userData: user
        })
    } catch (error) {
        res.render('error.ejs');
        
    }
})

postSignUp = ('/register', async (req, res) => {
    
    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        return res.redirect('/user');
        console.log("ya da burada");
    } catch (error) {
        res.render('error.ejs');
        
    }
})

getSignIn = (req, res) => {
    res.render("index.ejs");
};
postSignIn= (req, res) => {
    res.render("index.ejs");
};
getSignUp= (req, res) => {
    res.render("userCreate.ejs");
};
module.exports = {
    getUsers,
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp

}