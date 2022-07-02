import React from "react";

class F1 extends React.Component {
  constructor (props) {
    super (props)
      this.state = {
        name: '',
        email: '',
        password: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
      this.handleNextClick = this.handleNextClick.bind(this)

  }

  handleNameChange (event) {
    event.preventDefault()
    this.setState({name: event.target.value})
    console.log(this.state.name)
  }

  handleEmailChange (event) {
    event.preventDefault()
    this.setState({email: event.target.value})
    console.log(this.state.email)
  }

  handlePasswordChange (event) {
    event.preventDefault()
    this.setState({password: event.target.value})
    console.log(this.state.password)
  }

  handleNextClick (event) {
    event.preventDefault()
    this.props.update(this.state.name, this.state.email, this.state.password)
  }


  render () {
    return (
      <div>
          <div>
          <input type="text" value={this.state.name} placeholder="Enter your name..." onChange={this.handleNameChange}></input>
          <div/>
          <input type="text" value={this.state.email} placeholder="Enter your email..." onChange={this.handleEmailChange}></input>
          <div>
          <input type="text" value={this.state.password} placeholder="Enter your password..."onChange={this.handlePasswordChange}></input>
          </div>
          <button onClick={this.handleNextClick}>Next</button>
          </div>
       </div>
    )
  }
}
export default F1;