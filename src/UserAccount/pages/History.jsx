import React from 'react'
import Arrow from "../../images/arrow-right.svg"

const History = () => {
  return (
    <div className='side-flex'>
      <div className='loans-history'>
        <div className='loan-top'>
          <h3 >Collateral Loan</h3>
          <div className='right-arrow'>
            <p className='top-right-arrow'>Pay here</p>
            <img src={Arrow} alt='' className='arrow'/>
          </div>
        </div>
        <h1>N0.00</h1>
        <div className='loan-bottom'>
          <p className='loan-title'>Date Issued: 20th August 2020</p>
          <p className='loan-title-right'>Date due: None</p>
        </div>
      </div>
      <div>
        <div className='loan-history-status'>
            <h4 >History</h4>
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
    </div>
  )
}

export default History