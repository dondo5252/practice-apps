require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
var bodyParser = require('body-parser')


// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


//inserts
app.post('/checkout', (req, res) => {
  // console.log(req.body, "reqqqqq")
  // console.log(req.body.s_id,req.body.name,req.body.email, req.body.password, req.body.lineOne, req.body.lineTwo, req.body.state, req.body.zip, req.body.phoneNum, req.body.CCNum, req.body.expDate, req.body.CVV, req.body.billingZip)
  var query = `INSERT INTO responses (s_id, name, email, password, lineOne, lineTwo, state, zip, phoneNum, CCNum, expDate, CVV, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  var queryArgs = [req.body.s_id,req.body.name,req.body.email, req.body.password, req.body.lineOne, req.body.lineTwo, req.body.state, req.body.zip, req.body.phoneNum, req.body.CCNum, req.body.expDate, req.body.CVV, req.body.billingZip]
  return db.queryAsync(query, queryArgs)
  .then(() => {
    res.status(201).send('SUCEESSS! from app.post!')
  })
  .catch((error) => {
    console.log(error, "error in app.post")
  })
})

/****
 *
 *
 * Other routes here....
 *
 *
 *///

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
