const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    location: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    age: {
        type: Number
    },
    mobileNumber: {
        type: String
    },
    notes: [NoteSchema]
});

const userModel = mongoose.model('User', UserSchema);
module.exports = userModel;
