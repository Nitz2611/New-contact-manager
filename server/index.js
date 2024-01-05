const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisteredModel = require('./models/Registration');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Contact-manager');

app.post('/', (req, res) =>{
    const {email, password} = req.body;
    RegisteredModel.findOne({email: email})
    .then(registered => {
        if(registered) {
            //authenticate password with correct email
            if(registered.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req,res) =>{
    RegisteredModel.create(req.body)
    .then(registration => res.json(registration))
    .catch(err => res.json(err))
})


app.listen(3001, ()=>{
    console.log("server is running");
})