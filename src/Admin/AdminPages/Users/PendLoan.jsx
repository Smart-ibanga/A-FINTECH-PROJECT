import React, { useState, useEffect } from 'react'
import HeaderB from '../../AdminComponents/HeaderB';
import Arrow from "../../../images/arrow-right.svg"
import Passport from "../../../images/passport.svg"
import Sidebar from '../../AdminComponents/SidebarB'
import axios from 'axios';

import Paginate from './Paginate';
import { useNavigate } from 'react-router-dom';


const PendLoan =() => {

  const [userlist, setUserList] = useState()
 const [loading, setLoading] = useState(true)
 const [currentPage, setcurrentPage] = useState();
const [itemsPerPage, setitemsPerPage] = useState();
 

  const [userform, setUserForm] = useState({ })


  let navigate = useNavigate();
    
  const routePayLoan = () => {
    let path = '/user/loan/approve';
    navigate(path);
  };
  
  

  const authuser = async() => {
     const res =  await axios.get('/admin/users/details?id=1')
          console.log(res)
           console.log(res.data)
           setUserForm(res.data)
           setLoading(false)
        }

  useEffect(()=>{

   authuser()

  }, [])

  const loadPage = async () => {
    const res = await axios.get('admin/users/details?id=1')
           console.log(res.data)
           setUserList(res.data)
           setcurrentPage(res.data)
           setitemsPerPage(res.data.loan_history)
           setLoading(false)
       }


    useEffect (()=> {

        loadPage()
      
     }, [ ] )

     if (loading) {
        return <div>Loading......</div>
        }

  const indexofLastRecord = currentPage * itemsPerPage
  const indexofFirstRecord = indexofLastRecord - itemsPerPage


 console.log(userform)

  return (
     <section>
        <HeaderB />
        <div className='profile-menu'>
            <div className='header-space' >
                <Sidebar />
            </div>
            <div className='profile-details' >
              <div className='profile' >
                <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
                <label htmlFor='profilePhotoInput'  className='profilePhotoLabel' >
                    <div  role='button' className='profile-button' title='Click to change Photo'>
                        <img src={Passport}  alt='profile'/>
                    </div>
                </label>
                <div className='profileBio'>
                    <h3>Akande Adejuwon</h3>
                    <h4>Active</h4>
                    <p>active since 5th August 2020</p>
                </div>
              </div>
              <div className='side-flex'>
                <div className='users-loan-auth'>
                    <div className='user-loan-top'>
                        <h3 >Collatral Loan</h3>
                    </div>
                    <h1>{`₦ ${userform.data.current_balance}`}</h1>
                    <div className='users-loan-bottom'>
                        <p className='users-loan-title'>{`Date Issued: ${userform.data.date_issued}`}</p>
                        <div className='users-right-arrow'>
                            <p className='users-bottom-arrow'>Pending check here</p>
                            <img src={Arrow} alt='' className='users-arrow' onClick={routePayLoan}/>
                        </div>
                    </div>
                </div>

                  < Paginate 

                    userlist={userlist}
                    currentPage={currentPage}
                    itemsPerPage = { itemsPerPage }
                    loading ={loading}

                  />

                <div className='userSettings' >
                  <h2>User Profile Settings</h2>
                  <section  className='userProfileSettings'>
                    <h3>Profile</h3>
                    <ul>
                      <li className='userProfile' >
                        <div className='userProfileDetails'  >
                          <p>Name</p>
                          <div className='infodetails'>
                            <div className='profileData' >{userform.data.user_name}</div>
                          </div>
                        </div>
                      </li>
                      <li className='userProfile' >
                      <div className='userProfileDetails'  >
                        <p>Phone Number</p>
                        <div className='infodetails'>
                          <div className='profileData' >{userform.data.phone}</div>
                        </div>
                      </div>
                      </li>
                      <li className='userProfile' >
                      <div className='userProfileDetails'  >
                        <p>Address</p>
                        <div className='infodetails'>
                          <div className='profileData' >{userform.data.address}</div>
                        </div>
                      </div>
                      </li>
                      <li className='userProfile' >
                        <div className='userProfileDetails'  >
                          <p>Email</p>
                          <div className='infodetails'>
                            <div className='profileData' >{userform.data.email}</div>
                          </div>
                        </div>
                      </li>
                      <li className='userProfile' >
                        <div className='userProfileDetails'  >
                          <p>Account No</p>
                          <div className='infodetails'>
                            <div className='profileData' >{userform.data.account_num}</div>
                          </div>
                        </div>
                      </li>
                      <li className='userProfile' >
                        <div className='userProfileDetails'  >
                          <p>BVN</p>
                          <div className='infodetails'>
                            <div className='profileData' >{userform.data.bvn}</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
              </div>
              <div className='activation' >
                <button>Activate Account</button>
                <button className='deactivate' >Dectivate Account</button>
                <button className='delete' >Delete Account</button>
              </div>
            </div>
            </div>
        </div>
      </section>
  )
}

export default PendLoan