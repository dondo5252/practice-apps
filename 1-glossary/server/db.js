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
  // console.log(info, 'saveINFO')
  return Glossary.create(info)
 }



//findoneandupdate

 let getAll = () => {
  // var gloss = Glossary.find()
  // console.log("db getall", Glossary.find({__v: 0}))
  return Glossary
  .find({})
   .exec()
 }

 let deleteWord = (wordObj) => {
  console.log(wordObj, "Wooorddd OBJ")
    return Glossary.deleteOne(wordObj)
 }

// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.save = saveInfo;
module.exports.get = getAll;
module.exports.deleteWord = deleteWord
// 4. Import the models into any modules that need them
//