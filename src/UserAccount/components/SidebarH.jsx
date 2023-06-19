import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import Logout from '../../images/log-out-Filled.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import { useAuth } from '../../context/AuthProvider'
import swal from 'sweetalert'
import { menuItems } from './menuItems'








const SidebarH =() => {

  const [ isIcon, setIsIcon] = useState(false);

  
    const  navigate= useNavigate()

    const auth = useAuth();

    const logoutSubmit =  async(e) => {
      e.preventDefault();
   
      try {

        const url = "/logout";

        const {data: res}=await axios.post(url )
         console.log(res)
        localStorage.removeItem("token");
        auth.logout()
        swal("Success",(res.data.message),"success")
        navigate("/login");
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
  
      <div className="sidebar">
            <div className="top_section">
                <div className="bars">
                    <Hamburger onToggle={toggled => {
                      if (toggled) {
                        setIsIcon (!isIcon);
                      } else if(!toggled){
                        setIsIcon (isIcon)
                      }
                    }} />

                </div>
                <div className='hamburger'>
                {!isIcon ? 
                  (
                      menuItems.map((item, index)=>(
                          <NavLink to={item.path} 
                            key={index} 
                            className="side-menu" 
                      
                              >
                              <div className="icon" >{item.img}</div>
                          </NavLink>
                    ))
                   
                  )
                    : 
                  (
                    menuItems.map((item, index)=>(
                        <NavLink to={item.path} 
                         style={({isActive}) => { return{ color: isActive ? "green" : "white" }; }}
                         key={index} className="side-menu"
                        
                       >
                            <div className="link_text">{item.name}</div>
    
                        </NavLink>
                        
                    ))
               
                )
                      
                  }
    
                {!isIcon ? 
                  
                 <img src={Logout} onClick={logoutSubmit} className="side-menu"  alt="" />
                  : 
                  
                <div className="side-menu" onClick={logoutSubmit} role='button'>Logout</div>
              }
                </div>
            </div>
         
      </div>
  )
}
export default SidebarH





 // {
        //     menuItems.map((item, index)=>(
        //         <NavLink to={item.path} key={index} className="link" activeclassName="active">
        //             <div className="icon">{item.icon}</div>
        //             <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
        //         </NavLink>
        //     ))
        // }


        // <Menuburgers  onClick={toggle} />