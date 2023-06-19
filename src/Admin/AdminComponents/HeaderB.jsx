import React from 'react'
import Logo from "../../images/Ethiope-Logo.svg"
import { useNavigate } from 'react-router-dom';
import arrowBack from "../../images/arrow-left.svg"



const HeaderB = () => {

  let navigate = useNavigate();
 
  return (
    <React.Fragment>
      <div className='headerx'>
          <div className='back-Arrow'>
            <img src={Logo}   alt="logo" />
          </div>
          <div className='goBack-a' >
            <p>Back</p>
            <img src={arrowBack} onClick={() => navigate(-1)} alt='' className='Arrow'/>
          </div>
      </div>
    </React.Fragment>
  )
}

export default HeaderB