const mongoose = require('mongoose');

var emailDB = new mongoose.Schema({
    ownerRef:{
        type: String,
        required: true,
        trim: true
    },
    emailFrom:{
        type: String,
        required: true,
        trim: true
    },
    emailTo:{
        type: String,
        required: true,
        default: 'gabriel.picinato10@gmail.com'
    },
    subject:{
        type: String,
        required: true,
        default: 'Default Subject'

    },
    text:{
        type: String,
        required: true,
        default: 'Default Text'
    },
    sendDateEmail:{
        type: Date,
        default: true
    },
    statusEmail:{
        type: String,
        enum : ['SEND','ERROR']
    }
    
})

const EmailDB = mongoose.model('EmailDB', emailDB);

module.exports = EmailDB;