import React from "react";

class DefinitionListEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(props,'prrroooopppppsss')
    this.handledeleteClick = this.handledeleteClick.bind(this);
  }

  handledeleteClick (event) {
    event.preventDefault();
    this.props.delete(this.props.value.word)
    console.log( this.props.value.word, 'deleted on click')
  }


  render () {
    return (

      <div>{this.props.value.word}: {this.props.value.definition}
       <button>Edit</button>
      <button onClick={this.handledeleteClick}>Delete</button>
      </div>

    )
  }
}

export default DefinitionListEntry