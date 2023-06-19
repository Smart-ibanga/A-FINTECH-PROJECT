import React from 'react'
import HeaderB from '../AdminComponents/HeaderB'
import Sidebar from '../AdminComponents/SidebarB'
import userFilter from '../../images/Frame-695.svg'     
import { useNavigate } from 'react-router-dom'

const Accounts =() => {

  let navigate = useNavigate();
    
  const routeApproved = () => {
    let path = '/user/loan/auth';
    navigate(path);
  };

  const routeUnapproved =() => {
    let path = '/user/loan/pend';
    navigate(path);
  };

  return (
    <div>
        <HeaderB />
        <div className="containerA">
          <div className='asideA'>
            <Sidebar />
          </div>
          <div className='accounts-users' >
            <div className= "user-filter">
                <h3 className='titleHead' >Accounts</h3>
                <div className='filter-options'>
                    <img src={userFilter} className='filter' alt=''/>
                    <p>filter</p>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>
            <div className='accounts-users' >
                <div className='accounts-history-heading'>
                    <h4 >History</h4>
                    <p>Status</p>
                </div>
                <div>
                  <ul>
                    <li className='account-user-space' >
                      <div className='history-status'>
                          <div className='account-history'>1. Akande Adejuwon</div>
                          <div onClick={routeApproved} className='account-status-A'> 
                              <p>Authorized</p>
                          </div>
                      </div>
                    </li>
                    <li className='account-user-space' >
                      <div className='history-status'>
                          <div className='account-history'>1. Akande Adejuwon</div>
                          <div onClick={routeUnapproved}  className='account-status-B'>
                             Pending
                          </div>
                      </div>
                    </li>
                    <li className='account-user-space' >
                      <div className='history-status'>
                          <div className='account-history'>1. Akande Adejuwon</div>
                          <div onClick={routeUnapproved}  className='account-status-B'>
                              Pending
                          </div>
                      </div>
                    </li>
                    <li className='account-user-space' >
                      <div className='history-status'>
                          <div className='account-history' ><p>1. Akande Adejuwon</p></div>
                          <div onClick={routeUnapproved}  className='account-status-B'>
                              Pending
                          </div>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Accounts