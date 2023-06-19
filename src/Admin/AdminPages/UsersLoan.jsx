import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UsersLoan() {

  const [loans , setLoans] = useState({})
  const [loading, setLoading] = useState(true)

  let navigate = useNavigate();
    
  const routeLoan = () => {
    let path = '/accounts';
    navigate(path);
  };


  useEffect(()=>{

      loanDash()
    
  }, [])

  const loanDash= async() => {

   await axios.get('/admin/loans')
        .then ( res=> {
          console.log(res.data)
          setLoans(res.data)
        })
        .catch( err => {
          console.log(err)
        })
        .finally(() =>{
          setLoading(false)
        })
    }

  if (loading) return "Loading....."

  console.log(loans)

  return (
    <section >
      <div className='loan-options' >
        <div className='loans-admin'>
          <div className='loan-admin-top'>
            <h3 className='loanBalance' > All Loans</h3>
            <p className='top-arrow-right' >Total number of all loans</p>
            <h1>{loans.data.total_loans}</h1>
          </div>
        </div>
        <div className='loans-admin'>
          <div className='loan-admin-top'>
            <h3 className='loanBalance' > Approved</h3>
            <p className='top-arrow-right' >Total number of all loans</p>
            <h1 >{loans.data.pending_loans}</h1>
          </div>
        </div>
        <div className='loans-admin'>
          <div className='loan-admin-top'>
            <h3 className='loanBalance' >Pending</h3>
            <p className='top-arrow-right' >Total number of all loans</p>
            <h1 >{loans.data.pending_loans}</h1>
          </div>
        </div>
      </div>
      <div className='collateral-loan-admin'>
        <h3>Collateral Loans</h3>
        <p className='top-arrow-right'>Lorel Ipsum Dolop lorim<br></br> 
        ilum spinas</p>
    
        <button className='getLoanB-admin'  onClick={routeLoan}  >View more</button>
      </div>
      
    </section>
  )
}

export default UsersLoan