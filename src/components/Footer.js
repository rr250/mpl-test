import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <div class="row foot">
      <div class="col m12 grey lighten-3">
          <h5 class="grey-text text-darken-5">Install the MPL App and Get 20 MPL Tokens Free!</h5>
      </div>
      <div class="foot2 col m12 white">
        <img src={require('./android.png')} alt="android"/>
      </div>
    </div>
    )
  }

export default Footer