import React from 'react'
import Home from '../../images/home-Filled.svg'
import Loans from '../../images/credit-card-Filled.svg'
import Profile from '../../images/user-Filled.svg'
import History from '../../images/clock-Filled.svg'
import Help from '../../images/settings-Filled.svg'



export const menuItems = [
    {
      path:'/home',
      name:'Home',
      img: <img src={Home} alt="" />
    },
    {
      path:'loans',
      name:'Loans',
      img: <img src={Loans} alt="" />     
    },
    {
      path:'profile1',
      name:'Profile',
      img: <img src={Profile}  alt="" />
    },
    {
      path:'history',
      name:'History',
      img: <img src={History}  alt="" />
    },
    {
      path:'help',
      name:'Help',
      img: <img src={Help}   alt="" />
    },

   ]
