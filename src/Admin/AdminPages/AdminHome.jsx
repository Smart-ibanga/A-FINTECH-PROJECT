import React, {useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminHome = () => {

  const [active, setActive] = useState({})
  const [loading, setLoading] = useState(true)

    let navigate = useNavigate();
      
    const routeLoneA = () => {
      let path = '/accounts';
      navigate(path);
    };

    
    useEffect(()=>{

      adminDash()
      
    }, [])


    const adminDash = async()=> {
     await axios.get('admin/dashboard')
        .then(res => {
           console.log(res.data)
           setActive(res.data)
        })
      .catch(err => {
        console.log(err)
      })
      .finally(() =>{
        setLoading(false)
      })
    }


  if (loading) return "Loading......"
    

  return (
      <div className='loan-and-status' >
        <div className='loan-options' >
            <div className='loans-admin'>
              <div onClick={routeLoneA}  className='loan-admin-top'>
                <h3 className='loanBalance' > All Loans</h3>
                <p className='top-right-arrow' onClick={routeLoneA} >Total number of all loans</p>
                <h1 >{active.data.total_loans}</h1>
              </div>
            </div>
            <div className='loans-admin'>
              <div   onClick={routeLoneA}  className='loan-admin-top'>
                <h3 className='loanBalance' > Approved</h3>
                <p className='top-right-arrow'>Total number of all loans</p>
                <h1 >{active.data.approved_loans}</h1>
              </div>
            </div>
            <div className='loans-admin'>
              <div onClick={routeLoneA}   className='loan-admin-top'>
                <h3 className='loanBalance' >Pending</h3>
                <p className='top-arrow-right' >Total number of pending loans</p>
                <h1>{active.data.pending_loans}</h1>
              </div>
            </div>
        </div>
        <div className='loan-options' >
            <div className='status'>
              <div className='status-top'>
                <h3 className='loanBalance' > All Users</h3>
                <p className='top-arrow-right' >Total number of all users</p>
                <h1>{active.data.total_users}</h1>
              </div>
            </div>
            <div className='status'>
              <div  className='status-top'>
                <h3 className='loanBalance' > Active</h3>
                <p className='top-arrow-right' >Total number of active users</p>
                <h1 style={{color: "rgb(39, 210, 77)"}} >{active.data.active_users}</h1>
              </div>
            </div>
            <div className='status'>
              <div style={{background: "#dad9d9"}} className='status-top'>
                <h3 className='loanBalance' >Inactive</h3>
                <p className='top-arrow-right' >Total number of Inactive users</p>
                <h1 style={{color: "red"}} >{active.data.inactive_users}</h1>
              </div>
            </div>
        </div>
      </div>
  )
}

export default AdminHome