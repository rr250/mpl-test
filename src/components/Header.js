import React from 'react'
import './Header.css'

const Header = ({userName}) => {
    return (
    <div class="row head">
      <div class="col m12 s12">
          <h5 class="white-text">{userName}</h5>   
          <p class="white-text">invited you to play Mobile Premier League!</p>   
      </div>
    </div>
    )
  }

export default Header