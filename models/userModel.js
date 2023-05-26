const mongoose =  require('mongoose');
const bcrypt = require('bycrypt');
const JWT = require('jsonwebtoken'); 

//models 
const userSchema = new mongoose.Schema({}); 

const User = mongoose.model('User', userSchema);

module.exports = User; 