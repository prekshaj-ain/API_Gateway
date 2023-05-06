const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');
const { rateLimit } = require('express-rate-limit');

dotenv.config();

const app = express();

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000,
	max: 5,
})

app.use(morgan('combined'));
app.use(limiter);
app.use('/bookingService', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true}));

app.listen(process.env.PORT , ()=>{
    console.log(`Server started at ${process.env.PORT}`)
} )