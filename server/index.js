const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Contact-manager');



app.listen(3001, ()=>{
    console.log("server is running");
})