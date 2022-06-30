import React from "react";
import {render} from "react-dom";
import AddWord from "./AddWord.jsx"
import DefinitionList from "./DefinitionList.jsx"

const axios = require ('axios');

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions : []//{practice: test, hello:goodbye}
    }

    this.addWord = this.addWord.bind(this)
    this.updateDefinitions = this.updateDefinitions.bind(this)
    this.delete = this.delete.bind(this)
  }

  updateDefinitions (addWord, addDef) {
    let copy = this.state.definitions.slice()
    copy.push({word:addWord, definition:addDef})
    this.setState({definitions: copy})
    }

  delete(wordToDelete) {
    let copydelete = this.state.definitions.slice();
      for(let i = 0; i < copydelete.length;i++) {
        var currObj = copydelete[i]
        console.log(wordToDelete, " equals " , currObj.word)
        if (wordToDelete === currObj.word) {
          console.log( "before",copydelete)
          copydelete.splice(i, 1)
          console.log( "after",copydelete)
          this.setState({definitions: copydelete})
        }
      }
    }

  addWord(wordAdded, defAdded) {
    axios.post('/glossary', {
      word: wordAdded,
      definition: defAdded
    } )
    .then(function (response) {
      console.log('RESPPPONSE', response);
    })
    .catch(function (error) {
      console.log(error);
    })
    //  .then(function () {
    //    change state?
    //  });
  }



render() {
  return(
  <div>
    <p>Glossary</p>
      <AddWord addWord={this.addWord} update={this.updateDefinitions} />
      <DefinitionList glossary={this.state.definitions} delete={this.delete}/>
  </div>
  )
};
}

render(<App />, document.getElementById('root'))
