import React from "react";
import {render} from "react-dom";
import AddWord from "./AddWord.jsx"
import DefinitionList from "./DefinitionList.jsx"

const axios = require ('axios');

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions : [],
      current: [] //{practice: test, hello:goodbye}
    }
    this.addWord = this.addWord.bind(this)
    this.updateDefinitions = this.updateDefinitions.bind(this)
    this.delete = this.delete.bind(this)
    this.deleteDef = this.deleteDef.bind(this)
    // this.getDefinitions = this.getDefinitions.bind(this)

  }

  //Create
  //Read
  //Update
  //Delete

//////UPPPPDATE
  updateDefinitions () {
    axios.get('/glossary')
    .then((response) => {
      this.setState({definitions: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.updateDefinitions()
}




///////CREATE
  addWord(wordAdded, defAdded) {
    axios.post('/glossary', {
      word: wordAdded,
      definition: defAdded
    } )
    .then(function (response) {
      console.log(response)
      this.updateDefinitions ()
    })
    .catch(function (error) {
      console.log(error);
    })
  }

//delete
delete(wordToDelete) {
  let copydelete = this.state.definitions.slice();
    for(let i = 0; i < copydelete.length;i++) {
      var currObj = copydelete[i]
      // console.log(wordToDelete, " equals " , currObj.word)
      if (wordToDelete === currObj.word) {
        // console.log( "before",copydelete)
        copydelete.splice(i, 1)
        // console.log( "after",copydelete)
        this.setState({definitions: copydelete})
      }
    }
  }


deleteDef(deleteword, deletedef) {
  axios.delete('/glossary', {data: {word: deleteword, definition: deletedef}})
  .then((response) => {
    this.updateDefinitions()
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}


render() {
  return(
  <div>
    <p>Glossary</p>
      <AddWord addWord={this.addWord} update={this.updateDefinitions} />
      <DefinitionList glossary={this.state.definitions} deleteDef={this.deleteDef} />
  </div>
  )
};
}

render(<App />, document.getElementById('root'))


// update local storage
  // updateDefinitions (addWord, addDef) {
  //   let copy = this.state.definitions.slice()
  //   copy.push({word:addWord, definition:addDef})
  //   this.setState({definitions: copy})
  //   }