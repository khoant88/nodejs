// define dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//content
const app = express();

//import file routes config 
const projects = require('./app/routes/projects.route')

//connect mongoose 
mongoose.connect('mongodb+srv://admin:'+process.env.MONGO_ATLAT_PW+
        '@demo-bs2ma.mongodb.net/test?retryWrites=true',
        {
          useNewUrlParser:true  
        })


//middleware
app.use(logger('dev'));
//setup bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.use('/projects', projects);

app.get('/', function(req, res){
    res.status(200).json({
        message : "You requested to homepage"
    });
});

app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((req, res, next)=>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    //response to client
    res.status(status).json({
        error : {
            message : error.message
        }
    });
})

//module exports
module.exports = app;