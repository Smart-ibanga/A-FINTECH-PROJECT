
import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import Logo from '../../images/EthiopeLogo.svg'
import Statistics from '../../images/StatisticFinance3.svg'
import axios from "axios"
import { useAuth } from '../../context/AuthProvider'
import swal from 'sweetalert'

const Login = () => {

  const navigate = useNavigate();

 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
    });

   
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formLogin);
    }
  }, [formErrors]);

  const Validate = (values) => {

    const formErrors = {};
    const regexE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      formErrors.email = "Email is required!";
    } else if (!regexE.test(values.email)) {
      formErrors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      formErrors.password = "Password is required";
    } else if (values.password.length < 4) {
      formErrors.password = "Password must be more than 4 characters";
    }
    return formErrors;
  }

  const auth = useAuth()
 

  const handleChange = (event)=> {
    
    setFormLogin ( prevFormLogin => {
            return {
              ...prevFormLogin,
              [event.target.name]: event.target.value
            }
         })
    }


    const handleLogin= async (e) => {

      e.preventDefault();
      setIsSubmit(true)
      setFormErrors(Validate(formLogin))
      
      // send http request

      try {
            const url = "/login";
            const  {data : res} =  await axios.post(url, formLogin)
            console.log(res.data.token)
            localStorage.setItem('token', (res.data.token));
            auth.login()
            swal("Welcome!!!",(res.data.message),"success")
            navigate( "/home" , { replace: true });

     } catch (error) {
     console.log(error.response.message)
              if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
              ) {
                  swal("Warning",(error.response.data.message),"warning")
                
            }  
      };

    }

  
 return (
    <main className="Navbar">
      <div className="aside">
        <img src={Logo} className='Logo-app' alt="Logo" />
        <h3>Sign in with a few clicks</h3>
        <img src={Statistics} className='Fin-image' alt="Statistics" />
      </div>
      <div className="login">

         <h3>Sign in</h3>

        <form onSubmit={handleLogin}>
          <div className='form-data'>
          <label>Email</label>
              <input 
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formLogin.email}
            
              />
            </div>
              <p className='Alert'>{formErrors.email}</p>
            <div className='form-data'>
            <label>Password</label>
              <input 
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formLogin.password}
              required
              />
            </div>
            <p className='Alert'>{formErrors.password}</p>

          <button className='Submit'>Sign in</button>
          <br />
          <Link to='/register'>
            <p className='login-link'>Don’t have an account? sign up here.</p>
          </Link>
          <br />
          <Link to="/forget">
           <p className='login-link'>Forgot Password?</p>
          </Link>

        </form>
      </div>
    </main>
  )
}

export default Login