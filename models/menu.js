const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['salad', 'maincourse','starter'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    }
    
});

const Menu  = mongoose.model('menu', menuSchema);
module.exports = Menu;