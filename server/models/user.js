const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // username: {type: String},
    accessCode:{type:String},
  fname: {type: String, default: null},
  lname: {type: String, default: null},
  email: {type: String, unique: true},
  address: {type: String},
  unit: {type: String},
  cellphone: {type: Number},
   city: {type: String, default: null},
   state: {type: String, default: null},
   country: {type: String, default: null},
   zip: {type: Number, default: null},
 
  // fbId: {type: String},
  // googleId: {type: String},

  // linkedInId: {type: String},

  // registeredBy: {type: String},
  // bday: {type: Date, default: null},
  // gender: {type: String, default: null},

  // address: {type: String, default: null},
  // cardInfo: {type: String, default: null},
  // contactNo: {type: String, default: null},

  // isEnable: {type: String, default: 'yes'},

  // Roles: {type: Array, default: ['user']},
  // identity_status: {type: Boolean, default: false},
  pass: {type: String},
   token: {type: String},
  // dob: {type: String},
  // following: {type: Number, default: 0},
  // follower: {type: Number, default: 0},

  // verify: {type: String, default: 'no'},
  // counterId: {type: Number},
  // date: {type: Date, default: new Date()},

  // isAdmin: {type: Boolean, default: false},
});

module.exports = mongoose.model('Users', userSchema);
