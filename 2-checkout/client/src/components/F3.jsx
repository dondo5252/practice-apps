import React from "react";

class F3 extends React.Component {
  constructor (props) {
    super (props)
      this.state = {
        CCNum: '',
        expDate: '',
        CVV: '',
        billingZip: ''
      }
      this.handleCCNumChange = this.handleCCNumChange.bind(this)
      this.handleexpDateChange = this.handleexpDateChange.bind(this)
      this.handleCVVChange = this.handleCVVChange.bind(this)
      this.handlebillingZipChange = this.handlebillingZipChange.bind(this)
      this.handleF3NextClick = this.handleF3NextClick.bind(this)
  }

  handleCCNumChange (event) {
    event.preventDefault()
    this.setState({CCNum: event.target.value})
    console.log(this.state.CCNum)
  }

  handleexpDateChange (event) {
    event.preventDefault()
    this.setState({expDate: event.target.value})
    console.log(this.state.expDate)
  }

  handleCVVChange (event) {
    event.preventDefault()
    this.setState({CVV: event.target.value})
    console.log(this.state.CVV)
  }

  handlebillingZipChange (event) {
    event.preventDefault()
    this.setState({billingZip: event.target.value})
    console.log(this.state.billingZip)
  }

  handleF3NextClick (event) {
    event.preventDefault()
    console.log(this.state.CCNum, this.state.expDate, this.state.CVV, this.state.billingZip,   'testtttttt')
    this.props.update(this.state.CCNum, this.state.expDate, this.state.CVV, this.state.billingZip)
  }


  render () {
    return (
      <div>
          <div>
            <input type="text" value={this.state.CCNum} placeholder="Credit card number..." onChange={this.handleCCNumChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.expDate} placeholder="Expiration date..." onChange={this.handleexpDateChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.CVV} placeholder="Enter your CVV..." onChange={this.handleCVVChange}></input>
          </div>
          <div>
            <input type="text" value={this.state.billingZip} placeholder="Billing zip..." onChange={this.handlebillingZipChange}></input>
          </div>
          <div>
            <button onClick={this.handleF3NextClick}>Next</button>
          </div>
       </div>
    )
  }
}
export default F3;