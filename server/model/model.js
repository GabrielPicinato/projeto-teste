const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nomeProduto:{
        type: String,
        required: true,
        trim: true
    },
    tipoProduto:{
        type: String,
        required: true,
        trim: true
    },
    categoriaProduto:{
        type: String,
        required: true,
        trim: true
    },
    precoProduto:{
        type: Number,
        required: true,
    },
})



const Email = mongoose.model('Email', schema);

module.exports = Email;