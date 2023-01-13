const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    loginID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;