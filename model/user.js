const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName : {
        type : String,
        require  : true
    },
    lastName  : {
        type : String,
        require  : true
    },
    userName :  {
        type : String,
        require  : true
    },
    email  :  {
        type : String,
        require  : true,
        unique : true
    },
    password : {
        type : String,
        require  : true
    },
});

const USER = mongoose.model('user',userSchema)

module.exports = USER   