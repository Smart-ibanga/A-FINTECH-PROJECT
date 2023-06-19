import React from 'react'
import Logo from "../../images/Ethiope-Logo.svg"
import Passport from "../../images/passport.svg"
import arrowBack from "../../images/arrow-left.svg"
import { Link } from 'react-router-dom';


const HeaderX = () => {

 
  return (
    <React.Fragment>
      <div className='headerx'>
          <div className='backArrow'>
            <img src={Logo}   alt="logo" />
          </div>
          <div className='goBack' >
            <p>Back</p>
            <img src={arrowBack} alt='' className='arrow'/>
          </div>
      </div>
      <div className='profileImage'>
        <div  role='button'  className='profile-photo' title='Click to enter profile'>
          <Link to='profile'>
            <img src={Passport} alt='profile' />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeaderX