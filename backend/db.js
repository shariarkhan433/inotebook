const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/"

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => console.log("Connected to server")).catch((e) => console.log(e.message))
     //callback function using then and catch
}
module.exports = connectToMongo