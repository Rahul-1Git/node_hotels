const mongoose = require('mongoose');

// define the mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotel';

// set up the MongoDb connection URl
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// get the default connection 
// mongoose maintains a default connection object represting the mongoDb connection
const db = mongoose.connection;

// define event listeners for databases connection

db.on('connected', ()=>{
    console.log('connected to mongodb server hahahaha');
});

db.on('error',(err) =>{
    console.log('mongoDb hahaha connection error:' , err);
});

db.on('disconneted', () => {
    console.log('mongodb  disconnectd hahaha' );
});

// export the database connection 
module.exports = db;
