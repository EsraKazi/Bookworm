const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique:true,
        
    }
});

module.exports = mongoose.model('Users', UserSchema);