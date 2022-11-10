const Users = require("../models/User");
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');



getSignIn = ('/login',(req, res) => {
    res.render("userSignIn.ejs");
})

postSignIn= ('/login', async (req, res) => {
    const {username,password}= req.body;
    const user = await Users.findOne({username});
    if(!user){
        return res.redirect('/login');
    }
    const mathced = await bcrypt.compare(password, user.password);
    if(!mathced){
        return res.redirect('/login');
    }
    req.session.isAuth = true;
    const newUser = '/auth/users/'+`${user.username}`
    return res.redirect('/books/all');

})

getSignUp= (req, res) => {
    res.render("userSignUp.ejs");
};


postSignUp = ('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const user = new Users({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save(); 

        const newUser = '/auth/users/'+`${user.username}`
        return res.redirect(newUser);
    } catch (error) {
        res.render('error.ejs');
        
    }
})

logout = ('/logout', (req,res)=>{
    res.redirect('/');
});

module.exports = {
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp
}