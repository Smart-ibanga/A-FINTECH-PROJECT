import React, {useState} from 'react'
import Logo from '../../images/EthiopeLogo.svg'
import Statistics from '../../images/StatisticFinance3.svg'



function ForgotPassword() {
    const [formLogin, setFormLogin] = useState({
        email: "",
       
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

                <h3>Enter registered Email</h3>

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
              <button className='Submit'>Enter</button> 
            </form>
            </div>
        </main>
  )
}

export default ForgotPassword