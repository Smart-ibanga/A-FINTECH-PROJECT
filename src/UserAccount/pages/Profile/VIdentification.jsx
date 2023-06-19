import React from 'react'


function VIdentification ({ formData, setFormData }) {

  return(
      <section>
        <div className='form-data'>
          <label>Account</label>
          <input
            type="text"
            placeholder="First Name..."
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
        </div>
        
        <div className='form-data'>
          <label>Bvn</label>
          <input
            type="text"
            placeholder="Last Name..."
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </div>
   
        <div className='form-data'>
          <label htmlFor='uploadFile'>Valid Identification</label>
          <input type='file' accept='image/*' name='photo' id='uploadFile' />
        </div> 
        <span>Upload your International passport, National Id or Drivers Licensce</span>

      </section>
        
     )
  }

export default VIdentification











// const VIdentification = () => {

//       let navigate = useNavigate();
        
//       const routeValidId = () => {
//         let path = '/collateral';
//         navigate(path);
//       };

//   return (
//     <div>
//         <HeaderX />
//         <div className='loanArrow' >
//             <div className='header-space' >
//               <Sidebar />
//             </div>
//             <div className='loanValid-id'>
//               <form>
//                   <div className='form-data'>
//                     <label htmlFor='uploadFile'>Drivers Licence</label>
//                     <input type='file' accept='image/*' name='photo' id='uploadFile' />
//                   </div>
//                   <div className='form-data'> 
//                     <label htmlFor='uploadFile'>International Passport</label>
//                     <input type='file' accept='image/*' name='photo' id='uploadFile' />
//                   </div>
                  // <div className='form-data'> 
                  //   <label htmlFor='uploadFile'>National Id</label>
                  //   <input type='file' accept='image/*' name='photo' id='uploadFile' />
                  // </div>  
//                   <button className='Submit' onClick={routeValidId} >Next</button>
//               </form>
//             </div>
//         </div>
//     </div>
//   )
// }

