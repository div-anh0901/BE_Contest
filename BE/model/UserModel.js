const mongoose = require('mongoose');
const {Schema} =mongoose;

const UserSchema = new Schema({
    username: { type: String},
    email: {type: String},
    password: {type: String},
});


const model = mongoose.model("users", UserSchema);
module.exports = model;