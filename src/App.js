import React, { Component } from 'react';
import Header from "./components/Header";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {
  state={
    userName:"USERNAME12345",
    cash:'20',
    referral:'ABCD12',
  }
  render() {
    return (
      <div className="App">
        <div class="top">

          <Header userName={this.state.userName}/>
          <div class="row">
            <div class="col s10 m6 offset-m3 offset-s1">
              <Promo cash={this.state.cash} referral={this.state.referral}/>
            </div>
          </div>
          <br/>
          <br/>
          <br/>

        </div>
          <div class="row">
            <div class="col s12 m12">
              <Footer/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
