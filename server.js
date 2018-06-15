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

app.get('/', function(req, res){
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use(express.static('public'));
//var twitData = require("./twitData");
/*
app.get('/', function (req, res, next){
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
});


app.get('/', function(req,res){
  if(twitData) {
    res.status(200).render('twitPage', {twits: twitData, showButt: true});
  }
  else{
    next();
  }
});

app.use(express.static('public'));

app.get('/twit/:n', function(req,res,next){
  var n = req.params.n;
    if(twitData[n]){

      res.status(200).render('twitPage', {twits:[twitData[n]], showButt: false});

    }
    else{
      next();
    }
});


*/
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

var entryData = require("./entryData");

app.get('/test2', function (req, res){
  if(entryData){
    res.status(200).render('entryPage', {entry: entryData});
  }
  else{
    next();
  }
});

/*

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.get('*', function (req, res) {
  res.status(404).render('404');
});
*/

app.post('*', function (req, res, next) {
  //var person = req.params.person.toLowerCase();
  if (req.body && req.body.title && req.body.date && req.body.miles && req.body.text) {
    var post = {
      title: req.body.title,
      date: req.body.date,
      miles: req.body.miles,
      text: req.body.text
    };

   var entriesCollection = mongoDB.collection('entries');
    entriesCollection.updateOne(
      { title: req.body.title, 
        date: req.body.date,
        miles: req.body.miles,
        text: req.body.text
      }

      function (err, result) {
        if (err) {
          res.status(500).send("Error inserting entry into DB.")
        } else {
          console.log("== mongo insert result:", result);
          if (result.matchedCount > 0) {
            res.status(200).end();
          } else {
            next();
          }
        }
      }
    );
  } else {
    res.status(400).send("Request needs additional entries.")
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
