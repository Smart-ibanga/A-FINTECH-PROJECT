import React from 'react'

import Home from '../../images/home-Filled.svg'
import Loans from '../../images/credit-card-Filled.svg'
import Profile from '../../images/user-Filled.svg'

import Help from '../../images/settings-Filled.svg'
import Logout from '../../images/log-out-Filled.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'
import { useAuth } from '../../context/AuthProvider'






const SidebarB = () => {

 
  const menuItems=[
      {
        path:'/admin',
        name:'Home',
        img: <img src={Home} alt="admin home" />
      },
      {
        path:'loans',
        name:'Loans',
        img: <img src={Loans} alt="loans" />     
      },
      {
        path:'users',
        name:'User',
        img: <img src={Profile}  alt="profile" />
      },
     
      {
        path:'help',
        name:'Help',
        img: <img src={Help}   alt="help" />
      },


  ]

   const auth =  useAuth();

  const navigate = useNavigate()

  const logoutSubmit = async(e) =>{

    e.preventDefault();
   
  
      try {

        const url = "/admin/logout";

        const {data: res}=await axios.post(url )
        console.log(res)
        localStorage.removeItem("token");
        auth.logout()
        // swal("Success",(res.data.message),"success")
        navigate("/admin/login");
      }
      catch(error) {
           console.log('logout error', error)
           if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            swal("Warning",(error.response.data.message),"warning")
      
          }
        }

    };

    
  
  return (
    <div  >
        <div className="sidebar-A">
            {
              menuItems.map((item, index)=>(
                <NavLink to={item.path} key={index} className={({isActive})=> isActive? 'link-active-A' : 'link-A' } >
                    <div className="link-text-A">{item.name}</div>
                </NavLink>
                ))
            }
            <div className="sidebar-menu" onClick={logoutSubmit} role='button'>Logout</div>
        </div>
    </div>

  )
}

export default SidebarB





