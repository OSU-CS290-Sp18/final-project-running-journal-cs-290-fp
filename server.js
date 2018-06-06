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
//var fs = require('fs');
var app = express();



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var port = process.env.PORT || 3000;

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



app.get('/test', function (req, res, next){
  res.render('twitPage', {
    name: "Twitty",
    twits: [
      {
        text: "A body in motion must remain in motion unless acted upon by an outside force.",
        author: "NewtonRulez"
      },
      {
        text: "Huh?",
        author: "ConfusedTweeterer"
      },
      {
        text: "Why did the calf cross the road?",
        author: "Setup"
      },
      {
        text: "To get to the udder side!",
        author: "Punchline"
      },
      {
        text: "Any questions about flexboxes?",
        author: "Hess"
      },
      {
        text: "Friendly reminder: your taxes were due yesterday.",
        author: "TheIRS"
      }
    ]
  })

})



app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.get('*', function (req, res) {
  res.status(404).render('404');
});
*/
app.get('*', function (req, res) {
  res.write('<h1>'+"404: Page not found"+'</h1>');
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
