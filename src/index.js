const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require('../routes/Routes')
const app = express();


app.use(bodyParser.json());
app.use(router);

const port = 8000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log("We are live on " + port);
})

app.use('/', routes)