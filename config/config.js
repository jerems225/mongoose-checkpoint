require('dotenv').config();
const { MONGO_URI } = process.env;
const mongoose = require('mongoose');

// connect database
function connectDb()
{
    mongoose.connect(MONGO_URI, { useNewUrlParser: true }, (err) => {
        if (err) {
            console.log('db connection failed...', err);
        }
        else {
            console.log('db connection success...');
        }
    });
}

module.exports = connectDb