import React from "react";

class F2 extends React.Component {
  constructor (props) {
    super (props)
      this.state = {
        lineOne: '',
        lineTwo: '',
        state: '',
        zip: '',
        phoneNum: ''
      }
      this.handlelineOneChange = this.handlelineOneChange.bind(this)
      this.handlelineTwoChange = this.handlelineTwoChange.bind(this)
      this.handleStateChange = this.handleStateChange.bind(this)
      this.handleZipChange = this.handleZipChange.bind(this)
      this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this)
      this.handleF2NextClick = this.handleF2NextClick.bind(this)
  }

  handlelineOneChange (event) {
    event.preventDefault()
    this.setState({lineOne: event.target.value})
    console.log(this.state.lineOne)
  }

  handlelineTwoChange (event) {
    event.preventDefault()
    this.setState({lineTwo: event.target.value})
    console.log(this.state.lineTwo)
  }

  handleStateChange (event) {
    event.preventDefault()
    this.setState({state: event.target.value})
    console.log(this.state.state)
  }

  handleZipChange (event) {
    event.preventDefault()
    this.setState({zip: event.target.value})
    console.log(this.state.zip)
  }

  handlePhoneNumChange (event) {
    event.preventDefault()
    this.setState({phoneNum: event.target.value})
    console.log(this.state.phoneNum)
  }

  handleF2NextClick (event) {
    event.preventDefault()
    this.props.update(this.state.lineOne, this.state.lineTwo, this.state.state, this.state.zip, this.state.phoneNum)
  }


  render () {
    return (
      <div>
          <div>
            <input type="text" value={this.state.lineOne} placeholder="Address line one..." onChange={this.handlelineOneChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.lineTwo} placeholder="Address line two..." onChange={this.handlelineTwoChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.state} placeholder="State..." onChange={this.handleStateChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.zip} placeholder="Zip code..." onChange={this.handleZipChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.phoneNum} placeholder="Phone number..."onChange={this.handlePhoneNumChange}></input>
          </div>
          <div>
            <button onClick={this.handleF2NextClick}>Next</button>
          </div>
       </div>
    )
  }
}
export default F2;