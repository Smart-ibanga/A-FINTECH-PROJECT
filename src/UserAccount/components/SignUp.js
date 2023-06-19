import {useState, useEffect,} from 'react'
import validate from "./Validate"

import Logo from '../../images/EthiopeLogo.svg'
import Statistics from '../../images/StatisticFinance3.svg'

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import swal from 'sweetalert';
import { useAuth } from '../../context/AuthProvider'


const SignUp = () => {


      let navigate = useNavigate();

       const [formData, setFormData] = useState({

        first_name:"",
        last_name:"",
        email:"",
        phone_num:"",
        password:"",
        password_confirmation:""
    
    });


      const [errors, setErrors] = useState('');
      const [unSubmit, setUnsubmit] = useState(false)
      
      

      const handleChange = (event)=> {

        setFormData ( prevFormData => {
                return {
                  ...prevFormData,
                  [event.target.name]: event.target.value
                }
             })

             setErrors(validate(formData))
        }

      useEffect(() => {
        
        if (Object.keys(errors).length === 0 && unSubmit ) {
         
         
         }

      }, [errors, unSubmit]) 


      const auth = useAuth()

      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        setErrors(validate(formData))
        setUnsubmit(true)

        // send http request

      try {
            const url = "/register";
            const  res = await axios.post(url, formData)
            console.log(res.data)
            localStorage.setItem('token',(res.data.token));
            navigate("/home");
      } 
      catch (error) {
        console.log(error)
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              swal("Error",(error.data),"error")
          
        }
      }; 

     }

return (
      <div>
        <main className="Navbar">
            <div className="aside second">
              <img src={Logo} className='Logo-app' alt="Logo" />
              <h3>You are just a few clicks away from setting up your account</h3>
              <img src={Statistics} className='Fin-image' alt="Statistics" />
            </div>
          
            <div className="signup">
              <h3>Sign up</h3>
              <form onSubmit={handleSubmit}>
                <div className='form-data'>
                <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    onBlur={validate}
                    name="first_name"
                    value={formData.first_name}
                   />
                </div>
                  <p className='Alert'>{errors.first_name}</p>
                  
                <div className='form-data'>
                <label>Last Name</label>    
                  <input 
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={validate}
                  name="last_name"
                  value={formData.last_name}
                  required
                  />
                </div>
                <p className='Alert'>{errors.last_name}</p>
                <div className='form-data'>
                <label>Email</label>
                  <input 
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={validate}
                  name="email"
                  value={formData.email}
                  />
                </div>
                  <p className='Alert'>{errors.email}</p>
                <div className='form-data'>
                <label>Phone Number</label>
                  <input 
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  onBlur={validate}
                  name="phone_num"
                  value={formData.phone_num}
                  />
                </div>
                <p className='Alert'>{errors.phone_num }</p>
                <div className='form-data'>
                <label>Password</label>
                  <input 
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={validate}
                  name="password"
                  value={formData.password}
                  
                  />
                </div> 
                  <p className='Alert'>{errors.password}</p>
                <div className='form-data'>
                <label>Confirm Password</label>
                  <input 
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={validate}
                    name="password_confirmation"
                    value={formData.password_confirmation}
                  />
                </div>
                 <p className='Alert'>{errors.password_confirmation}</p>

                  <button 
           
                  className='Submit'
                  >
                  Sign Up</button>
                  <br />
                  <Link to='/login'>
                    <p className='login-link'>Already have an account? sign in here</p>
                  </Link>
              </form>
            
            </div>
        </main>
       
      </div>
     );
}

export default SignUp;


