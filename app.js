"use strict";

require("./src/Helper");
var express = require('express');
var app = express();
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  debug: true,
  preserveExtension: true
}));

app.use('/', require('./src/routes/index'));


app.use(function (req, res) {
  res.status(404).json( {error: 'Route not found'});
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error: err && err.message || " Matrix!!!, Sorry An error occurred"});
});



module.exports = app;
