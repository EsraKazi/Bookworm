const mongoose = require("mongoose");


const BookSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Books', BookSchema);