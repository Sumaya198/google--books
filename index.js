const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');



const port = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log('Server is listening on port ', port)
})