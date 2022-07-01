import React from "react";
import {render} from "react-dom";
import AddWord from "./AddWord.jsx"
import DefinitionList from "./DefinitionList.jsx"
import Search from "./Search.jsx"

const axios = require ('axios');

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions : []
    }
    this.addWord = this.addWord.bind(this)
    this.updateDefinitions = this.updateDefinitions.bind(this)
    this.deleteDef = this.deleteDef.bind(this)
    this.patchyPatch = this.patchyPatch.bind(this)
    this.filterSearch = this.filterSearch.bind(this)
    // this.delete = this.delete.bind(this)
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

  patchyPatch (wordObj) {
    console.log('patched')
    axios.patch('/glossary', wordObj)
    .then((response) => {
      console.log(response)
      this.updateDefinitions()
    })
    .catch((error) => {
      console.log(error);
    })
  }


///////CREATE
  addWord(wordAdded, defAdded) {
    axios.post('/glossary', {
      word: wordAdded,
      definition: defAdded
    } )
    .then((response) => {
      this.updateDefinitions ()
    })
    .catch((error) => {
      console.log(error);
    })
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
//filterSearch
filterSearch(wordSearched) {
  var container = []
  var copy = this.state.definitions.slice();
    for(let i = 0; i < copy.length;i++) {
      var currWord = copy[i].word;
      if(currWord.toLowerCase().includes(wordSearched.toLowerCase()))
        container.push(copy[i])
        console.log(container, "container")
        this.setState({definitions: container})
    }
}


render() {
  return(
  <div>
    <h1>Glossary</h1>
      <Search search={this.filterSearch}/>
      <AddWord addWord={this.addWord} update={this.updateDefinitions} />
      <DefinitionList glossary={this.state.definitions} deleteDef={this.deleteDef} patch={this.patchyPatch}/>
  </div>
  )
};
}

render(<App />, document.getElementById('root'))


