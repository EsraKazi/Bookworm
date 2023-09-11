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



getUser = ( '/:username' , async (req,res) => {
    username = req.params.username;
    try {
        const userNew = await Users.find({username: username})
        res.render("userProfile.ejs", {
            userData: userNew})
    } catch (error) {
        res.render('error.ejs');
    }
  })

  
  
/*updateUser = ('/:username', async(req,res)=>{
    if(user.username == req.params.username){
        console.log('You can update this user');
    }else{
        console.log('Only the user itself update the profile');
    }
})*/


deleteUser = ( '/:username' , async (req,res) => {
    username = req.params.username;
    try {
        const userNew = await Users.findByIdAndDelete({username: username})
        var user = await Users.find();
        res.render('users.ejs',{
            userData: user
        }) 
    } catch (error) {
        res.render('error.ejs');
    }
  })


module.exports = {
    getUsers,
    getUser,
    //  updateUser,
    deleteUser
}