import React from "react";
class AddWord extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      definition: ''
    }
    this.addonClick = this.addonClick.bind(this)
    this.handleChangeWord = this.handleChangeWord.bind(this)
    this.handleChangeDef = this.handleChangeDef.bind(this)
  }

addonClick(event) {
  //if word already exists
  event.preventDefault();
  console.log(this.state.value)
  this.props.addWord(this.state.value, this.state.definition)
  this.props.update(this.state.value, this.state.definition)
  this.setState({
    value: '',
    definition: ''
  })
  console.log('Complete')
}
handleChangeWord(event) {
  console.log(event.target.value)
  this.setState({value: event.target.value});
}
handleChangeDef(event) {
  console.log(event.target.value)
  this.setState({definition: event.target.value});
}


render() {
  return (
    <div>
      <form>
        <input
        type="text"
        placeholder="Enter word to add"
        value = {this.state.value}
        onChange={this.handleChangeWord}
        ></input>
      </form>
      <form>
        <input
        type="text"
        placeholder="Enter definition"
        value = {this.state.definition}
        onChange={this.handleChangeDef}
        ></input><button
        onClick={this.addonClick}
        >Add Word</button>
      </form>
    </div>
  )
}
}
export default AddWord