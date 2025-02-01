const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: String,
    email: {type:String, unique:true}, //unique mean no 2 users can have same email
    password: String,
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;