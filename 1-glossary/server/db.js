//model
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');
// 2. Set up any schema and models needed by the app


const glossarySchema = new mongoose.Schema ({
  word: String,
  definition: String
});

let Glossary = mongoose.model('Glossary', glossarySchema)

 let saveInfo = (info) => {
  console.log(info)
  return Glossary.create(info)
 }
//findoneandupdate

 let getAll = () => {
  return Glossary.find({})
  .exec()
 }
// let saveInfo = (info) => {
//      console.log(info)
//     }

// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.saveInfo = saveInfo;
module.exports.getAll = getAll;
// 4. Import the models into any modules that need them
//