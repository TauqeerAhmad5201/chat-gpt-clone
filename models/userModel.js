const mongoose =  require('mongoose');
const bcrypt = require('bycrypt');
const JWT = require('jsonwebtoken'); 

//models 
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'Username is Required']
    }, 
    email: {
        type: String, 
        required:[true, 'Email is required'], 
        unique:true
    },
    password: {
        type: String,  
        required:[true, 'Password is required'], 
        minlength:[6, 'Password length should be 6 character length']
    },
    customerId:{
        type: String, 
        default:""
    }, 
    subscription: {
        type: String,
        defualt: "", 
    }
}); 

//hashed password 
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    next();
}); 
const User = mongoose.model('User', userSchema);

module.exports = User; 