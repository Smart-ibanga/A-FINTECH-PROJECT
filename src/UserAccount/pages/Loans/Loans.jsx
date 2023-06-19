import React from 'react'
import { useNavigate } from 'react-router-dom'

const Loans = () => {

  
    let navigate = useNavigate();

    // const sendRequest = async () ={
    //     const res = await axios.post('url', {
         
    //       email: formLogin.email,
    //       password: formLogin.password,
    //     })
    //     .catch((err) => console.log(err));
    //     const data = await res.data;
    //     return data;
  
    //   }
    
    const routeChange = () => {
      let path = '/home/getLoan';

      //sendRequest().then( ()=> navigate(path))
    
      navigate(path);
    };
  

  return (
      <div className='side-flex'>
        <div className='collateral-loan'>
            <h3>Collaterall Loans</h3>
            <p className='top-right-arrow'>Apply for a loan</p>
        
            <button className='getLoanB' onClick={routeChange} >Get Loan</button>
          
        </div>
    </div>
    
  )
}

export default Loans



          