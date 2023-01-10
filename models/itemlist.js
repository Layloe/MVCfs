const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const itemListSchema = new mongoose.Schema({
    textinput: {
        type: String,
        required: true
    },
    numinput: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('ItemList', itemListSchema,'items')