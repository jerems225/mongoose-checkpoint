const mongoose = require('mongoose');
const connectDb = require('../config/config');
//connect to atlas db
connectDb()


const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    favoriteFood:{
        type:Array,
        require:true
    },
});

module.exports = mongoose.model('Persons',PersonSchema);