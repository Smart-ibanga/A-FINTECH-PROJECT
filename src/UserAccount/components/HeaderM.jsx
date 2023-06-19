import Hamburger from 'hamburger-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../../images/Ethiope-Logo.svg"
import Passport from "../../images/passport.svg"
import SidebarH from './SidebarH';


const HeaderM = () => {

  let navigate = useNavigate();
    
    const routeProfile = () => {
      let path = 'profile';
      navigate(path);
    };

  return (
    <div className='headerMobile2'>

      <div className='header'>
         
          <img src={Logo} className='user-logo '  alt="logo" />
          
      </div>
      <div className='profileImage-menu'>
         
          <div  role='button'  className='profile-photo' title='Click to enter profile'>
              <img src={Passport} alt='profile' onClick={routeProfile} />
          </div>
      </div>
    </div>
  )
}

export default HeaderM