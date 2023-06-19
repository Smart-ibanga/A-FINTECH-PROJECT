import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Passport from "../../../images/passport.svg"
import HeaderB from '../../AdminComponents/HeaderB'
import Sidebar from '../../AdminComponents/SidebarB'

const CurrentLoan=()=> {

    const [userform, setUserForm] = useState({ })
    const [loading, setLoading] = useState(true)
    
    const [pendloan, setPendLoan] = useState({userform})

    const handleApproval =() => {


    }




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

 
 if (loading) {
    return <div>Loading......</div>
    }

  return (
    <div>
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

                <div>
                    <div className='loan-history-status'>
                        <h4 >Current Loan</h4>
                        <p>Status</p>
                    </div>
                    <div >
                        <ul className='loan-data-details'>
                        <li className='loan-history-data' >
                            <div className='loan-history'><p>1.  Collateral Loan(N200,000.00).    [20/09/2020]</p></div>
                            <div className='loan-status'><p>Pending</p></div>
                        </li>
                        </ul>
                    </div>
                </div>

                <div className='userSettings' >
                    <h2>Verification Process</h2>
                    <section className='customerDetailsApproval'>
                        <h4>Know your customer</h4>
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
                                    <p>Email</p>
                                    <div className='infodetails'>
                                        <div className='profileData' >{userform.data.email}</div>
                                    </div>
                                </div>
                            </li>
                            <li className='userProfile' >
                                <div className='userProfileDetails'  >
                                    <p>Date of Birth</p>
                                    <div className='infodetails'>
                                        <div className='profileData' >18 / 06 / 1986</div>
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
                                    <p>Employment Status</p>
                                    <div className='infodetails'>
                                        <div className='profileData' >Employed</div>
                                    </div>
                                </div>
                            </li>
                            <li className='userProfile' >
                                <div className='userProfileDetails'  >
                                    <p>Salary</p>
                                    <div className='infodetails'>
                                        <div className='profileData' >N200,000</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
               
                    <section className='accountDetailsApproval'>
                        <h4>Account details</h4>
                        <ul>
                            <li className='userProfile' >
                                <div className='userProfileDetails'  >
                                    <p>Bank </p>
                                    <div className='infodetails'>
                                        <div className='profileData' >null</div>
                                    </div>
                                </div>
                            </li>
                            <li className='userProfile' >
                                <div className='userProfileDetails'  >
                                    <p>Account No</p>

                                    <div className='infodetails'>
                                        <div className='profileData' >null</div>
                                    </div>
                                </div>
                            </li>
                            <li className='userProfile' >
                                <div className='userProfileDetails'  >
                                    <p>BVN</p>
                                    <div className='infodetails'>
                                        <div className='profileData' >null</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <div className='approval' >
                        <button className='approve' onClick={handleApproval} >Approve</button>
                        <button className='disapprove' >Disapprove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentLoan