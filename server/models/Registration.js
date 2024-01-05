const mongoose = require('mongoose');

//creating schema means creating elements and defining types in database collection

const RegisteredSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
})

//creating model of collection
const RegisteredModel = mongoose.model("registration", RegisteredSchema);
module.exports = RegisteredModel