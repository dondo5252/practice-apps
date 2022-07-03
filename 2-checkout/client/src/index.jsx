import React from "react";
import { render } from "react-dom";
import F1 from "./components/F1.jsx"
import F2 from "./components/F2.jsx"
import F3 from "./components/F3.jsx"
import Summary from "./components/Summary.jsx"
const axios = require('axios')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: '',
      email: '',
      password: '',
      lineOne: '',
      lineTwo: '',
      state: '',
      zip: '',
      phoneNum: '',
      CCNum: '',
      expDate: '',
      CVV: '',
      billingZip: ''
    }

    this.updateF1 = this.updateF1.bind(this)
    this.updateF2 = this.updateF2.bind(this)
    this.updateF3 = this.updateF3.bind(this)
    this.checkout = this.checkout.bind(this)
  }


  updateF1 (nameUpdate, emailUpdate, passwordUpdate) {
    this.setState({count: 2, name: nameUpdate, email: emailUpdate, password: passwordUpdate})
  }

  updateF2 (lineOneUpdate, lineTwoUpdate, stateUpdate, zipUpdate, phoneNumUpdate) {
    this.setState({count: 3,  lineOne: lineOneUpdate, lineTwo: lineTwoUpdate, state: stateUpdate, zip: zipUpdate, phoneNum: phoneNumUpdate})
    //setState
    }
  updateF3 (CCNumUpdate, expDateUpdate, CVVUpdate, billingZipUpdate) {
    //setState
      this.setState({count: 4, CCNum: CCNumUpdate, expDate: expDateUpdate, CVV: CVVUpdate, billingZip: billingZipUpdate})
      // console.log(this.state)
      // console.log(CCNumUpdate, expDateUpdate, CVVUpdate, billingZipUpdate, 'innvoookkkedddd update f3')
    }

    checkout () {
      axios.post('/checkout', {
        s_id: document.cookie,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        lineOne: this.state.lineOne,
        lineTwo: this.state.lineTwo,
        state: this.state.state,
        zip: this.state.zip,
        phoneNum: this.state.phoneNum,
        CCNum: this.state.CCNum,
        expDate: this.state.expDate,
        CVV: this.state.CVV,
        billingZip: this.state.billingZip
      })
      .then((response) => {
        console.log(response,'rerurn on client side');
        this.setState({
          count: 1,
          name: '',
          email: '',
          password: '',
          lineOne: '',
          lineTwo: '',
          state: '',
          zip: '',
          phoneNum: '',
          CCNum: '',
          expDate: '',
          CVV: '',
          billingZip: ''})
      })
      .catch((error) => {
        console.log(error, "errrooorr posting from client side");
      });
    }

  render() {
    var page;
    if(this.state.count === 1) {
      page = <F1 update={this.updateF1}/>
    } else if(this.state.count === 2) {
      page = <F2 update={this.updateF2}/>
    } else if (this.state.count === 3) {
      page = <F3 update={this.updateF3}/>
    } else if (this.state.count === 4) {
      page = <Summary post={this.checkout} info={this.state}/>
    }

   console.log(document.cookie)

    return (
      <div>
        <h1>Checkout!</h1>
        <div>
          {page}
        </div>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
    )
  };
}
render(<App/>,document.getElementById("root"))
