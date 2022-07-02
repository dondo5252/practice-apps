//controller
require("dotenv").config();
// const save = require('./db.js')
// const get = require('./db.js')
const{save, get, deleteWord, updateOne} = require('./db.js')
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
 app.use(bodyParser.json())//parses data allow access to req.body

//Create
app.post('/glossary', (req,res) => {
  save(req.body)
  .then(() => {
    res.sendStatus(200).send();
  })
  .catch((error) => console.log(error, "error posting"))
})

//read
app.get('/glossary', (req, res) => {
   //console.log(get.getAll)
  get()
  .then((allData) => {
      res.send(allData)
  })
  .catch((error) => console.log(error, "error getting"))
})

//update
app.patch('/glossary', (req,res) => {
  console.log(req.body, 'boodddyyyyy on update')
  updateOne(req.body)
  .then((response) => {
    res.send(response)
  })
  .catch((error) => console.log(error, "error patching"))
})


//delete
app.delete('/glossary',  (req, res) => {
  deleteWord(req.body)
  .then(() => {
      res.send("Deleted from app.delete")
  })
  .catch((error) => {
    res.sendStatus(404)
    console.log(error, "error deleting")
  })
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
