const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');
const app = express();
require ('dotenv/config');


app.use(cors())
app.use(bodyParser.json());



//import routes

const postsRoutes= require('./routes/posts');

app.use('/posts', postsRoutes),


//Routes

app.get('/', (req,res) => {
    res.send('You can do this')
});

app.get('/posts', (req,res) => {
    res.send('Greatness lies within you')
});

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    {strictQuery:true}, () => console.log('Connected to DB')),

//Listen to the server
app.listen(3000);

