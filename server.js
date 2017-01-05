var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');

app.get('/', function(req,res){
   var fileName = path.join(__dirname, 'index.html');
   res.sendFile(fileName, function(err){
      if (err) {
         console.log(err);
         res.status(err.status).end();
       }
       else {
         console.log('Sent:', fileName);
       }
   });
   
});

app.get('/:datestring', function(req,res){
   var st = req.params.datestring;
   var obj = {};
   if (moment(st).isValid()) {
      obj = {
         natural: moment(st).format("MMMM Do, YYYY"),
         unix: moment(st).format("X")
      };
   } else if (moment.unix(st).isValid()) {
      obj = {
         natural: moment.unix(st).format("MMMM Do, YYYY"),
         unix: moment.unix(st).format("X")
      };
   }
   else { 
      obj = {
         natural: 'null',
         unix: 'null'
      };
   }
   res.send(obj);
});

app.listen(5000, function(){
   console.log('Timestamp App listening on port 8080'); 
});