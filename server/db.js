const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Shreya:1234@cluster0.uzgdv.mongodb.net/hackathon?retryWrites=true&w=majority'

const connectToMongo = async () => {
    mongoose.connect(dbURI).then(()=>{
        console.log('Connection Successful');
    }).catch((err)=> console.log("No Connection"));
}

module.exports = connectToMongo