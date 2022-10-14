
require("dotenv").config();
const mongoose = require("mongoose");
let mongoUrl = process.env.mongoUrl;

const mongoConnection = () => {
    return mongoose.connect(mongoUrl, {
       useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = mongoConnection;