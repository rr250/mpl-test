import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <div class="row foot">
        <div class="col s12 m12 grey lighten-3">
            <p class="grey-text text-darken-5">Install the MPL App and Get 20 MPL Tokens Free!</p>
        </div>
        <div class="foot2 col s12 m12 white">
          <img src={require('./android.png')} alt="android"/>
        </div>
    </div>
    )
  }

export default Footer