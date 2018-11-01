require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
const redis = require('redis');

const client = redis.createClient();

// Print redis errors to the console
client.on('error', (err) => {
  console.log("Error " + err);
});

client.setex(`wikipedia2`, 3600, 'hello');

client.get("wikipedia2", function (err, reply) {
  if (err) throw err;
  if (reply){
    console.log(reply.toString()); // Will print `OK`
  } else {
    console.log('couldnt find it lol');
  }
});

var {addUser} = require('../database-mongo/index');

let client_id = process.env.SPOTIFY_CLIENT_ID;
let redirect_uri = 'http://localhost:3000/';

let app = express();

app.use(bodyParser.urlencoded({limit: '5mb', extended: true }))
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/auth', (req, res) => {
  var scope = 'user-read-private user-read-email user-top-read'; 
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      response_type: 'token'
    }));
});

app.get('/test', (req, res) => {
  res.send("hi eddie");
});


app.post('/api/user', (req, res) => {
  console.log(req.body);
  addUser(req.body, () => res.status(200).end());
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


