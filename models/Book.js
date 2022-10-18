const mongoose = require("mongoose");


const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    year: {
        type: Number
    },
    page: {
        type: Number
    },
    score: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Books', BookSchema);