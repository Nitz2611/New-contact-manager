const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisteredModel = require('./models/Registration');
const ContactModel = require('./models/contacts');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB connected"));

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

app.get('/home', (req, res) => {
    ContactModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post("/create", (req, res) => {
    ContactModel.create(req.body)
        .then(contacts => res.json(contacts))
        .catch(err => res.json(err))
})

app.get('/getContact/:id', (req, res) => {
    const id = req.params.id;
    ContactModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/updateContact/:id', (req, res) => {
    const id = req.params.id;
    ContactModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteContact/:id', (req, res) => {
    const id = req.params.id;
    ContactModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


var port = process.env.PORT || '3001'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})