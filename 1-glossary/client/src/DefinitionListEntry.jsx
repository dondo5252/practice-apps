import React from "react";

class DefinitionListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handledeleteClick = this.handledeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this)

  }

  handledeleteClick (event) {
    event.preventDefault();
    this.props.deleteDef(this.props.value.word, this.props.value.definition)
    console.log( this.props.value.word, 'deleted on click')
  }
  handleEditClick (event) {
    event.preventDefault();
    let defPrompt = prompt(`Change the definition for ${this.props.value.word}!`)
    console.log(defPrompt, "prompt")
    this.props.patch({word: this.props.value.word, definition: defPrompt})
  }


  render () {
    return (
      <div>-{this.props.value.word}: {this.props.value.definition}
       <button onClick= {this.handleEditClick}>Edit </button>
      <button onClick={this.handledeleteClick}>Delete</button>
      </div>
    )
  }
}

export default DefinitionListEntry;