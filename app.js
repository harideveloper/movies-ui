console.log("Application reloaded");

const express = require('express');
const app = express();
const path = require('path');


app.use('/public', express.static(path.join(__dirname,'public')));

const routes = require('./routes/movie_routes.js')

app.use('/',routes);
app.set('view engine','ejs');

// app.set('views',path.join(__dirname,'views'));





app.listen(4000)

module.exports = app;


