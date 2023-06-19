import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const  AllLoans =() => {

  const [loan, setLoan] = useState({

    name:'',
    interest:'',
    insurance: '',
    tenure:'',
    fee:'',

  })

  const handleChange = (event) => {

       setLoan( prevLoan => {
          return {
              ...prevLoan,
              [event.target.name]: event.target.value
          }
        })

      }

      const navigate = useNavigate()
  
      const handleSubmit = async(e) => {
          e.preventDefault();

          try {
           const url = "/products"
          const {data: res}=  await axios.post(url, loan)
          console.log(res.data)
          swal("Welcome!!!",(res.data.message),"success")
          navigate( "/home/history" , { replace: true });
          } 
          catch (error) {
            console.log(error.message)
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              swal("Warning",(error.message),"warning")
              
            }  
        };


      }


  return (
    <section className='createloan'>
        <h1>Create a loan product</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-data'>
                <label>Name</label>
                <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="name"
                value={loan.name}
            
                />
            </div>
            <div className='form-data'>
                <label>Interest</label>
                <input 
                type="text"
                placeholder="interest"
                onChange={handleChange}
                name="interest"
                value={loan.interest}
              
                />
            </div>
            <div className='form-data'>
                <label>Tenure  Limit</label>
                <input 
                type="text"
                placeholder="tenure"
                onChange={handleChange}
                name="tenure"
                value={loan.tenure}
            
                />
            </div>
            <div className='form-data'>
                <label>Insurance</label>
                <input 
                type="text"
                placeholder="insurance"
                onChange={handleChange}
                name="insurance"
                value={loan.insurance}
                
                />
            </div>
            <div className='form-data'>
                <label>Fee</label>
                <input 
                type="text"
                placeholder="fee"
                onChange={handleChange}
                name="fee"
                value={loan.fee}
                />
            </div>
           <button className='Submit'>Submit</button>
        </form>
    </section>
  )
}

export default AllLoans