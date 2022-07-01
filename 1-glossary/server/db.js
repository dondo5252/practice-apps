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
//Create
 let saveInfo = (info) => {
  // console.log(info, 'saveINFO')
  return Glossary.create(info)
 }




//read
 let getAll = () => {
  return Glossary
  .find({})
   .exec()
 }


//update
  let updateOne = (wordObj) => {
    var filter = {word: wordObj.word}
    var update = {definition: wordObj.definition}
    return Glossary.findOneAndUpdate(filter, update, {
      new: true
    })
  }
//Delete
  let deleteWord = (wordObj) => {
    // console.log(wordObj, "deleted")
      return Glossary.deleteOne(wordObj)
   }



// 3. Export the models
module.exports.Glossary = Glossary;
module.exports.save = saveInfo;
module.exports.get = getAll;
module.exports.deleteWord = deleteWord
module.exports.updateOne = updateOne
// 4. Import the models into any modules that need them
//