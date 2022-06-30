//controller
require("dotenv").config();
const save = require('./db.js')
const get = require('./db.js')
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json())
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/glossary', (req,res) => {
  //save added definitons
  save.saveInfo(req.body)
 .then(() => res.sendStatus(200).send())

  //send response back
})

app.get('/glossary', (req, res) => {
  // console.log(get.getAll)
  get.getAll()
  .then((allData) => {
    console.log(allData)
      res.send(allData)
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
