import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash' 
import { NavLink } from 'react-router-dom'

const Paginate = ({userlist,   }) => {

 const [pending, setPending] = useState( false)
 
const ChangePage =() => {
    axios.get('admin/users/details?page=1')
    .then( res => 
        console.log(res.data) 
        )
     .catch(err =>
        console.log (err.data)
            
        )
    }


//  const loadPage = async () => {
//     const res = await axios.get('admin/users/details?id=1')
//            console.log(res.data)
//            setUserList(res.data)
//            setcurrentPage(res.data)
//            setitemsPerPage(res.data.loan_history)
//            setLoading(false)
//        }


//     useEffect (()=> {

//         loadPage()
      
//      }, [ ] )

//      if (loading) {
//         return <div>Loading......</div>
//         }
       
//   const pageCount = 
//  userlist.data.loan_history.data? 
//  Math.ceil(userlist.data.loan_history.data.length/userlist.data.loan_history.per_page) : 0;
//  if (pageCount === 1)return null;
//  const pages = _.range(1, pageCount + 1)

// console.log(userlist.data.loan_history.links[0].label)  

  return (
        <section >
            <div>
                <div className='users-history-heading'>
                    <h4 >History</h4>
                    <p>Status</p>
                </div>
                <div>
                <ul>
                    <li className='history-space' >
                    <div className='historyStatus'>
                        <div className='history' ><p>{}</p></div>
                        <div className='status-history-A'><p>Pending</p></div>
                    </div>
                    </li>
                    <li className='history-space' >
                    <div className='historyStatus'>
                        <div className='history' ><p>1. Collateral Loan. (N500,000.00)  [20/09/2020]</p></div>
                        <div className='status-history-B'><p>Paid</p></div>
                    </div>
                    </li>
                    <li className='history-space' >
                    <div className='historyStatus'>
                        <div className='history' ><p>1. Collateral Loan. (N500,000.00)  [20/09/2020]</p></div>
                        <div className='status-history-B'><p>Paid</p></div>
                    </div>
                    </li>
                    <li className='history-space' >
                    <div className='historyStatus'>
                        <div className='history' >1. Collateral Loan. (N500,000.00)  [20/09/2020]</div>
                        <div className='status-history-B'>Paid</div>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                <div>
                    { userlist.data.loan_history.data=[] ? 
                        (<div className='emptyStatus'>No user history available......</div>) : (
                    <ul>
                            {
                            userlist.data.loan_history.data.map( (data, index)=> (
                        
                            <li  key={index} className='history-space' >
                                <div className='historyStatus'>
                                    <div className='history' ><p>{}</p></div>
                                    <div className='status-history'><p>{}</p></div>
                                </div>
                            </li>
                        ))
                        } 
                    </ul>
                    )}
                </div>
                <div className='paginateNav' >
                    <p>{`Showing From: ${userlist.data.loan_history.from} to: ${userlist.data.loan_history.from} of ${userlist.data.loan_history.total}`}</p>
                    <div className='currentPageButton' >
                        <div  className='pageLinks'>
                            {
                                userlist.data.loan_history.links.map((link, index)=>(
                                
                                  <a href={`${link.url}`}
                                    style={
                                     link.active
                                      ?
                                        ({
                                            color: '#fff',
                                            backgroundColor: '#060185',
                                            borderRadius: '25%'
                                        })

                                        :

                                        ({ 
                                            color: '#5E5E5E' 
                                        })

                                        }
                                        
                                        key={index} 
                                     >
                                  
                                   {link.label}
                                  </a>
                                                         
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>  
    </section>
  )
}

export default Paginate;


    // <button>Prev</button>
    // <div className='currentPage' >{userlist.data.loan_history.current_page}</div>
    // <button>Next</button>

     
                                
    // .map((link) => (                                                                                     

    //     <li>
    //         <div  onClick={()=>{ 
    //             const ChangePage = async() => {
    //               await axios.get(link.url) }
    //              ChangePage()
    //              }}
                
            
    //         >
    //         {link.label}
    //         </div>
    //     </li>
       