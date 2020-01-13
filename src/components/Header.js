import React from 'react'

const Header = ({userName}) => {
    return (
    <div class="row">
      <div class="col m6 offset-m4">
          <h1 class="white-text">{userName}</h1>   
          <h3 class="white-text">invited you to play Mobile Premier League!</h3>   
      </div>
    </div>
    )
  }

export default Header