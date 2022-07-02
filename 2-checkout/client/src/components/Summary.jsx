import React from "react";
class Summary extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    }
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this)
    console.log(props.post)

  }

  handlePurchaseClick (event) {
    event.preventDefault();
    this.props.post()
  }

  render () {
    return (
      <div>
        <p>Information Summary</p>
        <h5>name: {this.props.info.name}</h5>
        <h5>email: {this.props.info.email}</h5>
        <h5>password: {this.props.info.password}</h5>
        <h5>Address line one: {this.props.info.lineOne}</h5>
        <h5>Address line two: {this.props.info.lineTwo}</h5>
        <h5>State: {this.props.info.state}</h5>
        <h5>Zip code: {this.props.info.zip}</h5>
        <h5>Phone Number: {this.props.info.phoneNum}</h5>
        <h5>Credit Card: {this.props.info.name}</h5>
        <h5>Expiration: {this.props.info.name}</h5>
        <h5>CVV: {this.props.info.CVV}</h5>
        <h5>Zip code: {this.props.info.billingZip}</h5>
        <button onClick={this.handlePurchaseClick}>Purchase</button>
      </div>
    )
  }

}
export default Summary;