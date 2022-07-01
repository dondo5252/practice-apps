//controller
require("dotenv").config();
// const save = require('./db.js')
// const get = require('./db.js')
const{save, get, deleteWord} = require('./db.js')
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
 app.use(bodyParser.json())//parses data allow access to req.body
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/glossary', (req,res) => {
  //save added definitons
  save(req.body)
  .then(() => {
    res.sendStatus(200).send();
  })
  .catch((error) => console.log(error, "error psoting"))
})


  //send response back


app.get('/glossary', (req, res) => {
   //console.log(get.getAll)
  get()
  .then((allData) => {
      res.send(allData)
  })
})

app.delete('/glossary',  (req, res) => {
  deleteWord(req.body)
  .then(() => {
      res.send("DEleted from app.delete")
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
