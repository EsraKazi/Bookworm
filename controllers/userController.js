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



getUser = ( '/users/:username' , async (req,res) => {
    username = req.params.username;
    try {
        const userNew = await Users.find({username: username})
        res.render("userProfile.ejs", {
            userData: userNew})
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
    res.render("userSignUp.ejs");
};


postSignUp = ('/register', async (req, res) => {
    
    const user = new Users({    //ok
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    if (user.password.length < 6) {     //ok
        return res.render('userSignUp.ejs');
      }

    try {
        const savedUser = await user.save(); 
        const newUser = '/auth/users/'+`${user.username}`
        return res.redirect(newUser);
    } catch (error) {
        res.render('error.ejs');
        
    }
})

module.exports = {
    getUsers,
    getUser,
    getSignIn,
    postSignIn,
    getSignUp,
    postSignUp

}