import React from 'react'
import './Promo.css'

const Promo = ({cash,referral}) => {
    return (
      <div class="row promo">
        <img src={require('./kl.png')} alt="kl"/>
          <br/>
          <h5>Get FREE Cash</h5>
          <h1 class="red-text"><i class="fa fa-inr"></i>{cash}</h1>
          <h5>Use Referral Code</h5>
          <h3>{referral}</h3>
      </div>
    )
  }

export default Promo