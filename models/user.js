const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  fname: String,
  lname: String,
  email: String
}, {
  timestamps: true
});


const User = mongoose.model('User', UserSchema);


module.exports = User;












