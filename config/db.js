const mongoose = require('mongoose');

// when we use mongodb atlas then we connect db
//const config = require('config');
//const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/booklist',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log(" MongoDB is Connected....");
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;