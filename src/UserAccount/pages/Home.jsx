import React, { useEffect, useState } from 'react'
import Arrow from "../../images/arrow-right.svg"
import {Link} from "react-router-dom"
import axios from 'axios'
import { useAuth } from '../../context/AuthProvider'

const Home =()=> {

    const [cost, setCost] = useState({})
    const [loading, setLoading] = useState(true)

    

          useEffect(()=>{

            getCost();
          
          }, [])


    const getCost = async() => {
      const res =  await axios.get('users/dashboard')
            
              console.log(res.data)
              setCost(res.data)
              setLoading(false)                 
        }

        if (loading) return <div>"Loading......"</div>

 console.log(cost)

  return (
    <div className='side-flex'>
        <div className='loans'>
          <div className='loan-top'>
            <h3>Loan Balance</h3>
            <div className='right-arrow'>
              <Link to='/home/getloan' className='right-arrow link'>
                <p className='top-right-arrow' >
                  Get started here
                </p>
                <img src={Arrow} alt='' className='arrow'/>
              </Link>
            </div>
          </div>
          <h1>{`₦ ${cost.data.loan_amount}.00`}</h1>
          <div className='loan-bottom'>
            <p className='loan-title'>{`Date Issued: ${cost.data.date_issued}`}</p>
            <p className='loan-title-right'>{`Date due: ${cost.data.due_date}`}</p>
          </div>
        </div>
        
        <div className='circle-options'>
            <span className="circle">
              <p>
                <Link to='history' className='linkCircle'>History</Link>
              </p>
            </span>
            <span className="circle">
              <p>
                <Link to='help' className='linkCircle'>FAQ's</Link>
              </p>
            </span>
            <span className="circle">
              <p>
                <Link to='profile1' className='linkCircle'>Profile</Link>
              </p>
            </span>
        </div>
    </div>
  )
}

export default Home