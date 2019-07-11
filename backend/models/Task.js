const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('task', UserSchema)