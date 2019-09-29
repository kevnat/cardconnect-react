const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const API = require('./routes/authRouter');
const MONGODB_URI =  "mongodb://localhost/payments"
// "mongodb://knathan:database1@ds237713.mlab.com:37713/heroku_95h5dfww" ||

// const db = require('/.models');
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI).then(()=> {
  console.log(`connected to database + ${MONGODB_URI}`);
  })
  .catch(err => {
    console.log('connection error', err.stack);
  });


// Use middlewares to post json data to the server
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('client/build'));
app.use(API);

app.get('/', function(req, res) {
    res.send('home');
});

app.use('/api', API)

app.listen(PORT, function(){
  console.log(`Server listening on port: ${PORT}.`);
})

module.exports = app;