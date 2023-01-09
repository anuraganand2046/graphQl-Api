require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connection successful")
    } catch (error) {
        console.log("Error in connecting to database");
        process.exit(1);
    }
}
module.exports = connectDB;