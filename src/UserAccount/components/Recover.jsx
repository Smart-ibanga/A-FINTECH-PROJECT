import React, {useState} from 'react'
import Logo from '../../images/EthiopeLogo.svg'
import Statistics from '../../images/StatisticFinance3.svg'

function Recover() {

    const [formLogin, setFormLogin] = useState({
        password: "",
        confirmpassword: "",
       
        });
    
 
      const handleChange = (event)=> {
        
        setFormLogin ( prevFormLogin => {
                return {
                  ...prevFormLogin,
                  [event.target.name]: event.target.value
                }
             })
        }

     const handleLogin= (e) => {

            e.preventDefault();
       
       }
           


  return (
        <main className="Navbar">
            <div className="aside">
                <img src={Logo} className='Logo-app' alt="Logo" />
                <h3>Sign in with a few clicks</h3>
                <img src={Statistics} className='Fin-image' alt="Statistics" />
            </div>
            <div className="form">

                <h3>Recover Account</h3>

            <form onSubmit={handleLogin}>
              <div className='form-data'>
              <label>Password</label>
                <input 
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                name="email"
                value={formLogin.password}
                required
                />
              </div>
              <div className='form-data'>
              <label>Confirm Password</label>
                <input 
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                name="password"
                value={formLogin.confirmpassword}
                required
                />
              </div>
              
              <button className='Submit'>Enter</button>

            </form>
            </div>
        </main>
    
  )
}

export default Recover