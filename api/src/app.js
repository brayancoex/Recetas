const  express = require('express')
const app = express();
const router = require('./Router/rout')
const morgan = require('morgan')
const bodyparser = require('body-parser') 


app.use(morgan('tiny'))
app.use(bodyparser.json())
app.use('/', router)

module.exports = app;