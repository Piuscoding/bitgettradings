
const mongoose = require('mongoose');


const depositSchema = new mongoose.Schema({

    wallet: {
        type: String,
        default: "1F3ofDUcKkXLMq8PtRJkyo3TdRrTSFQdNm"
    },
    amount: {
        type: String
    },

    status: {
        type: String,
        default: 'pending'
    },

    photo:{
        type: String,
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});

const Deposit = mongoose.model('deposit', depositSchema);

module.exports = Deposit;