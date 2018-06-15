/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Joshua Strozzi
 * Email: strozzij@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" +
mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;

var app = express();




app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var port = process.env.PORT || 3000;  //export PORT=####

app.get('/og', function(req, res){
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/test', function (req, res, next){
  res.render('entryPage', {
    name: "entries",
    entry: [
      {
        title: "My first run",
        text: "this is my first run text",
        miles:"3",
        date: "June 4, 2018"

      },
      {
        title: "My second run",
        text: "this is my second run text",
        miles:"1",
        date: "June 5, 2018"
      },
      {
        title: "My third run",
        text: "this is my third run text",
        miles:"4",
        date: "June 6, 2018"
      },
    ]
  })
});

var entryData = require('./entryData');
app.get('/test2', function (req, res){
  if(entryData){
    res.status(200).render('entryPage', {entry: entryData});
  }
  else{
    next();
  }
});

app.get('/', function(req, res, next){
  var entriesCollection=mongoDB.collection('entries');
  entriesCollection.find().toArray(function(err, entries){
    if (err){
      res.status(500).send("error fetching entries from db");
    }
    else{
      res.status(200).render('entryPage', {entry: entries })
    }
  });
});



app.post('*', function (req, res, next) {
  console.log('someone is trying to put in info');
  if(req.body && req.body.text && req.body.date && req.body.miles && req.body.title) {
    var entriesCollection = mongoDB.collection('entries');
    entriesCollection.insertOne(
      { title: req.body.title,
        text: req.body.text,
        date: req.body.date,
        miles: req.body.miles},
      function (err, result) {
        if (err) {
          res.status(500).send("Error inserting entry.")
        } else {
          console.log("== mongo insert result:", result);
        }
      }
    );
  } else {
    res.status(400).send("Request needs a JSON body with caption and photoURL.")
  }
});

app.use('*', function (req, res) {
  res.status(404).render('404');
});

MongoClient.connect(mongoURL, function(err, client) {
  if(err) {
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server is listening on port", port);
    console.log(mongoURL);
  });
})
