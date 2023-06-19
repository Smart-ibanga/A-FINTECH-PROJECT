import React from 'react'
import {useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import Logo from '../../images/EthiopeLogo.svg'
import Statistics from '../../images/StatisticFinance3.svg'
import axios from 'axios'

function LoginAdmin() {

    const navigate = useNavigate();

const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
    });
    
    const handleChange = (event)=> {
    
    setFormLogin ( prevFormLogin => {
            return {
                ...prevFormLogin,
                [event.target.name]: event.target.value
            }
            })
    }

    const auth = useAuth()
    
    const handleLogin= async (e) => {

        e.preventDefault();

          // send http request

      try {
        const url = "/admin/login";

      const {data: res}=  await axios.post(url, formLogin)
      console.log(res)
      const authed = localStorage.setItem('token',(res.token));
      auth.login(authed)
      navigate('/admin')
      
      } 
      catch (error) {
        console.log(error.response)
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          
        }  
	};

 }





  return (
    <div>
        <main className="Navbar">
            <div className="aside">
                <img src={Logo} className='Logo-app' alt="Logo" />
                <h3>Sign in to Admin Page</h3>
                <img src={Statistics} className='Fin-image' alt="Statistics" />
            </div>
            <div className="form">

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
                required
                />
              </div>
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
              
              <button className='Submit'>Sign in</button>
              
            </form>
            </div>
        </main>
    </div>
  )
}

export default LoginAdmin