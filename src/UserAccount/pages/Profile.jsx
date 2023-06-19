import React from 'react'
import Passport from "../../images/passport.svg"
import getPhotoUrl from 'get-photo-url';
import {useState} from 'react'
import Sidebar from '../components/Sidebar';
import PersonalInfo from './Profile/PersonalInfo';
import UserAccountDetail from './Profile/UserAccountDetail';
import VIdentification from './Profile/VIdentification';


const Profile=()=>{ 

      const [page, setPage] = useState(0);
      const [profilePhoto, setProfilePhoto] = useState(Passport)


      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        stateOfOrigin: "",
        email: "",
        password: "",
        confirmPassword: ""
       
      });

      const updateProfilePhoto = async() => {

        //get selected photo
        const newProfilePhoto = await getPhotoUrl("#profilePhotoInput")
        setProfilePhoto(newProfilePhoto)

        //update state here
      }
    
      const FormTitles = ["Personal Info", "User Account Details", "Bank account & Valid Identification"];
    
      const PageDisplay = () => {
        if (page === 0) {
          return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
          return <UserAccountDetail formData={formData} setFormData={setFormData} />;
        } else {
          return <VIdentification formData={formData} setFormData={setFormData} />;
        }
      };

      // const handleSubmit = (e) => {
      //   e.preventDefault()
      // }

return (
  <div className='profile-menu'>
      <div className='header-space' >
        <Sidebar />
      </div>
      <div className='profile-details' >
        <div className='profile' >
            <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
            <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto} className='profilePhotoLabel' >
              <div  role='button' className='profile-button' title='Click to change Photo'>
                <img src={profilePhoto}  alt='profile'/>
              </div>
            </label>
            <div className='profileBio'>
              <h3>Akande Adejuwon</h3>
              <h4>Active</h4>
              <p>active since 5th August 2020</p>
            </div>
        </div>
        <div>
        <div >
          <h1>{FormTitles[page]}</h1>
          <div>{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page === 0}
              onClick={() => {
                
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
        
 
    </div>



      </div>
      
      
  </div>
      
  )
}

export default Profile

















// const Profile = () => {

//   const [formData, setFormData] = useState({

//     Name: " ",
//     phoneNumber: " ",
//     address: " ",
//     dateOfBirth: " ",
//     stateOfOrigin: " ",
//     email: " ",
//     changePassword: " ",
//     enterNewPassword: " ",

//     });

//     let navigate = useNavigate();
    
//     const routeProfile = () => {
//       let path = '/profile2';
//       navigate(path);
//     };
  

//     const handleChange = (event)=> {

//       setFormData ( prevFormData => {
//               return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//               }
//            })
//       }

//       const handleSubmit = (e) => {
//         e.preventDefault()
       
//       };
     

//   return (
    // <div className='profile-menu'>
    //   <div className='header-space' >
    //     <Sidebar />
    //   </div>
    //   <div className='profile-details' >
    //     <div className='profile' >
    //         <input type='file' accept='image/*' name='photo' id='profilePhotoInput' />
    //         <label htmlFor='profilePhotoInput'  className='profilePhotoLabel' >
    //           <div  role='button' className='profile-button' title='Click to change Photo'>
    //             <img src={Passport}  alt='profile'/>
    //           </div>
    //         </label>
    //         <div className='profileBio'>
    //           <h3>Akande Adejuwon</h3>
    //           <h4>Active</h4>
    //           <p>active since 5th August 2020</p>
    //         </div>
    //     </div>
//         <form onSubmit={handleSubmit}>
//               <h1>Personal Info</h1>
//               <div className='form-data'>
//                   <label>Name</label>
//                   <input 
//                     type="text"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="Name"
//                     value={formData.Name}
//                     className='profileInput'
//                     required
//                     />
//               </div>
                  
//               <div className='form-data'>
//                     <label>Phone Number</label>
//                     <input 
//                     type="tel"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="phoneNumber"
//                     minLength="0"
//                     maxLength="12"
//                     value={formData.Number}
//                     className='profileInput'
//                     required
//                     />
//               </div>
              
//               <div className='form-data'>
//                     <label>Address</label>
//                     <input 
//                     type="text"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="address"
//                     value={formData.address}
//                     className='profileInput'
//                     required
//                     />
//               </div>
              
//               <div className='form-data'>
//                     <label>Date of Birth</label>
//                     <input 
//                     type="date"
//                     placeholder=""
//                     onChange=''
//                     name="dateOfBirth"
//                     value=''
//                     required
//                     />   
//               </div>
//               <div className='form-data'>
//                     <label>State of Origin</label>
//                     <input 
//                     type="text"
//                     placeholder=""
//                     onChange=''
//                     name="stateOfOrigin"
//                     value=''
//                     required
//                     />
//               </div>
//               <h1>User Account details</h1>
//               <div className='form-data'>
//                     <label>Email</label>
//                     <input 
//                     type="email"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="email"
//                     value={formData.email}
//                     required
//                     />
//               </div>
            
//               <div className='form-data'>
//                     <label>Change Password</label>
//                     <input 
//                     type="password"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="changePassword"
//                     value={formData.password}
//                     className='profileInput'
//                     required
//                     />
//               </div>
                    
//               <div className='form-data'>  
//                     <label>Enter New Password</label>
//                     <input 
//                     type="password"
//                     placeholder=""
//                     onChange={handleChange}
//                     name="newPassword"
//                     value={formData.newPassword}
//                     className='profileInput'
//                     required
//                     />
//               </div>
//               <div className='saveProfile'>
//                 <button onClick={routeProfile}>Next</button>
//               </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Profile



