import React from "react";
import {render} from "react-dom";
const axios = require ('axios');

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions : []
    }
  }
  search(searchWord) {
    axios.post('/glossary', {
      word: 'searchedword',//replace with searchedword
      definition: 'not a CAT!'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    // .then(function () {
    //   ///change state?
    // });
  }
render() {

  return(
  <div>
    <p>Hello, World!</p>
  </div>
  )
};
}
render(<App />, document.getElementById('root'))
