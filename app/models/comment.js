// import dependencies
const mongoose = require('mongoose')

// COMMENT SUBDOCUMENT - comments array of an issue
const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    }
}, {
    timestamps: true
})

module.exports = commentSchema