import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { UseLocalStorage } from '../../hooks/UseLocalStorage'
import Header from './Header'
import HeaderM from './HeaderM'
import Sidebar from './Sidebar'

const Layout = () => {

  const {user}= useAuth()

  
  if (!user ) {
    
    return <Navigate to="/login" />;
  } else {

  return (
      <div>
        <Header />
        <div className='container'>
         
            <Sidebar />
          
          <div className='header-grid'  >
            
            <HeaderM />
            <Outlet />
          </div>
        </div>
    </div>
    )
  }
}

export default Layout



 // { !isHeader ? <Header /> : <Header  disabled /> }

//  { isHeader ?  <Header removeHeader={removeHeader} /> : <></>   }