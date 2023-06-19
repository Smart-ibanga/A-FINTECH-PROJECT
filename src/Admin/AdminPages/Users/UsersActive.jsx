import React from 'react'
import HeaderB from '../../AdminComponents/HeaderB'
import Sidebar from '../../AdminComponents/SidebarB'
import Arrow from "../../../images/arrow-right.svg"
import Passport from "../../../images/passport.svg"

const  UsersActive = () => {
  return (
    <section >
        <HeaderB/>
        <div className="containerA">
            <div className='asideA'>
                <Sidebar />
            </div>
            <div>
                <div className='user-profile' >
                    <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
                    <label htmlFor='profilePhotoInput'  className='profilePhotoLabel' >
                        <div  role='button' className='user-profile-button' title='Click to change Photo'>
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
                    <div className='users-loan-history'>
                        <div className='user-loan-top'>
                            <h3 >Salary Loan</h3>
                        </div>
                        <h1>N50,0000.00</h1>
                        <div className='users-loan-bottom'>
                            <p className='users-loan-title'>Date Issued: 20th August 2020</p>
                            <div className='users-right-arrow'>
                                <p className='users-bottom-arrow'>Pending check here</p>
                                <img src={Arrow} alt='' className='users-arrow'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='users-history-status'>
                            <h4 >History</h4>
                            <p>Status</p>
                        </div>
                        <div>
                            <form className='user-history-data'>
                                <div className='users-status-history'>
                                    <input 
                                    type="text"
                                    placeholder="1. Salary Loan(N200,000.00).    [20/09/2020]"
                                    name=""
                                    value=''
                                    defaultValue=''
                                    className='loan-details'
                                    />
                                </div>
                                <div className='status-input'>
                                    <input  type='text' className='users-status-input' placeholder='pending'  />
                                </div>
                            </form>
                            <form className='user-history-data'>
                                <div className='users-status-history'>
                                    <input 
                                    type="text"
                                    placeholder="1. Salary Loan(N200,000.00).    [20/09/2020]"
                                    name=""
                                    value=''
                                    defaultValue=''
                                    className='loan-details'
                                    />
                                </div>
                                <div className='status-input'>
                                    <input  type='text' className='users-status-input' placeholder='pending'  />
                                </div>
                            </form>
                            <form className='user-history-data'>
                                <div className='users-status-history'>
                                    <input 
                                    type="text"
                                    placeholder="1. Salary Loan(N200,000.00).    [20/09/2020]"
                                    name=""
                                    value=''
                                    className='loan-details'
                                    defaultValue=''
                                    />
                                </div>
                                <div className='status-input'>
                                    <input  type='text' className='users-status-input' placeholder='pending'  />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UsersActive