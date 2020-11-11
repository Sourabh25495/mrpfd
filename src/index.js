const users = require('./../data/users.json');

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../data/users.json');

const routes = require('../routes/Routes')
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log("We are live on " + port);
})

app.use('/', routes)