const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT , ()=>{
    console.log(`Server started at ${PORT}`);
} )