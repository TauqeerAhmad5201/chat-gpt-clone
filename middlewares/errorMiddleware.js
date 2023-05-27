const errorResponse = require('../utils/errorResponse'); 

const errorHandler = (err , req, res, next) => {
    let err = {...err}
    err.message = err.message

    //mongoose cast Error 
    if(err.name === 'CastError'){
        const message = 'Resources not found';
        error = new errorResponse(message, 404)
    }
    //duplicate key error 
    if(err.code === 11000){
        const message = 'Duplicate field value entered';
        error = new errorResponse(message, 4000)
    }
    // mongoose validation
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new errorResponse(messsage,400)
        res.status(error.statusCode || 500).json({
            success:false,
            error: error.message || 'Server Error' 
        }); 
    }
};

module.exports = errorHandler; 