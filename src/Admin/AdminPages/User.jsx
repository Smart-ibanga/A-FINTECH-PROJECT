import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderB from '../AdminComponents/HeaderB';
import Sidebar from '../AdminComponents/SidebarB';
import FilterSwitch from './Users/FilterSwitch';
                 


const User = () => {

  const [userDetails, setUserDetails] = useState([])

  let navigate = useNavigate();
    
  const routeUserview = () => {
    let path = '/usersActive';
    navigate(path);
  };


  useEffect(()=>{

    axios.get('/admin/users/details/2')
      .then ( res=> {
        console.log(res)
         console.log(res.data)
         setUserDetails(res.data)
      })
      .catch( err => {
        console.log(err)
      })
    
  }, [])




  return (
    <section className='' >
      <HeaderB />
      <div className="containerA">
          <div className='asideA'>
            <Sidebar />
          </div>
          <div>
            <div>
              <FilterSwitch />
            </div>
            <div  className='userList'>
              <table className='bodyTitle' >
                  <thead>
                    <tr className='headTitle' >
                      <th>S/No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ade</td>
                        <td>Ade@gmail.com</td>
                        <td>Active</td>
                        <td className='actions' >
                          <button className='view' onClick={routeUserview} >View</button>
                          <button className='edit'>Edit</button>
                          <button className='delete'>delete</button>
                        </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                
                    <tr>
                      <td>4</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Ade</td>
                      <td>Ade@gmail.com</td>
                      <td>Active</td>
                      <td className='actions' >
                        <button className='view'>View</button>
                        <button className='edit'>Edit</button>
                        <button className='delete'>delete</button>
                      </td>
                    </tr>
                  </tbody>
               </table>
            </div>

        </div> 
      </div>
    </section>
  )
}

export default User







// <div className= "user-filter">
// <h3 className='titleHead' >User</h3>
// <div className='filter-options'>
//     <img src={userFilter} alt=''/>
//     <p>filter</p>
//     <i class="fa fa-chevron-down" aria-hidden="true"></i>
// </div>
// </div>