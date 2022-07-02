import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.onClickSearch = this.onClickSearch.bind(this)
  }



  handleSearchChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value})
  }

  onClickSearch(event) {
    console.log(this.state.value)
    event.preventDefault();
    if(!this.state.value) {
      alert('Please enter a word to search!')
    } else {
    this.props.search(this.state.value)
    }
  }

  render() {
    return (
      <form>
        <label>
         Search Word:
        <input type='text' value={this.state.value} onChange={this.handleSearchChange} placeholder="Search a word..."/>
        <button onClick={this.onClickSearch}>Search</button>
        </label>
      </form>
    )
  }
}
export default Search;