import React from 'react'
import Logo from "../../images/Ethiope-Logo.svg"

function Header() {
  return (
    <React.Fragment>
      <div className='headerA'>
          <img src={Logo} className='user-logo '  alt="logo" />
          
      </div>
    </React.Fragment>
  )
}

export default Header