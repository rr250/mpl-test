import React from 'react'
import './Promo.css'

const Promo = ({cash,referral}) => {
    return (
      <div class="row promo">
        <img src={require('./kl.png')} alt="kl"/>
        <div class="col m6 offset-m5">
          <h5>Get FREE Cash</h5>
          <h1 class="red-text"><i class="fa fa-inr"></i>{cash}</h1>
          <h5>Use Referral Code</h5>
          <h1>{referral}</h1>
        </div>
      </div>
    )
  }

export default Promo