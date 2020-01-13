import React, { Component } from 'react';
import Header from "./components/Header";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

class App extends Component {
  state={
    userName:"USERNAME12345",
    cash:'20',
    referral:'ABCD12',
  }
  render() {
    return (
      <div className="App">
        <Header userName={this.state.userName}/>
        <Promo cash={this.state.cash} referral={this.state.referral}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
