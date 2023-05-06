const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv')

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('combined'));
app.use('/bookingService', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true}));

app.listen(process.env.PORT , ()=>{
    console.log(`Server started at ${process.env.PORT}`)
} )