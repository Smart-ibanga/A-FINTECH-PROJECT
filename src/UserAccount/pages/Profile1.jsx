import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import getPhotoUrl from 'get-photo-url';
import Passport from "../../images/passport.svg"
import swal from 'sweetalert'
import axios from "axios"

const Profile1 = () => {

    const navigate = useNavigate()

    const [profilePhoto, setProfilePhoto] = useState(Passport)
    const [formProfile, setFormProfile] = useState({

        dob: '',
        gender: '',
        address: '',
        state_origin: '',
        lga: ''
     })


     const routeChange =async(e) =>{
        e.preventDefault()

        // send http request

      try {
        const url = "/profile";

        const {data: res} = await axios.post(url, formProfile )
        console.log(res);
        swal("Profile status",(res.status),"success")
        navigate("/home/bank");
        
      } 
      catch (error) {
        console.log(error.message)
        swal("Error",(error.data.message),"error")
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ){
        swal("Error",(error.message),"error")
     }
	};



     }

     const updateProfilePhoto = async() => {

        //get selected photo
        const newProfilePhoto = await getPhotoUrl("#profilePhotoInput")
        setProfilePhoto(newProfilePhoto)

        //update state here
      }
 
  return (
    <section className="profile1" >
       
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
        <form onSubmit={routeChange}>
            <h2>Personal-Info</h2>
            <div >
                <div className='form-data'>
                <label>Date of Birth</label>
                    <input
                    type="date"
                    name='dob'
                    placeholder="Date of Birth"
                    value={formProfile.dob}
                    onChange={(e) => {
                        setFormProfile({ ...formProfile, dob: e.target.value });
                    }}
                    />
                </div>
                <div className='form-data'>
                <p className='gender' >Gender</p>
                    <input 
                    type="radio"
                    name="gender" 
                    value="male" 
                    id="male"
                    checked={formProfile.gender === "male"}
                    onChange={(e) => {
                    setFormProfile({ ...formProfile, gender: e.target.value });
                    }}

                    />
                    <label htmlFor='male'>male</label>
                    
                    <input
                        type="radio" 
                        name="gender"
                        value="female"
                        id="female" 
                        checked={formProfile.gender === 'female'}
                        onChange={(e) => {
                            setFormProfile({ ...formProfile, gender: e.target.value });
                        }}

                    />
                    <label htmlFor='female'>female</label>
                </div>
               
                <div className='form-data'>
                <label>Address</label>
                    <input
                    type="text"
                    name='address'
                    placeholder="Address"
                    value={formProfile.address}
                    onChange={(e) => {
                        setFormProfile({ ...formProfile, address: e.target.value });
                    }}
                    />
                </div>
                <div className='form-data'>
                <label>State of Origin</label>
                    <input
                    type="text"
                    name='state_origin'
                    placeholder="State of origin"
                    value={formProfile.state_origin}
                    onChange={(e) => {
                        setFormProfile({ ...formProfile, state_origin: e.target.value });
                    }}
                    />
                </div>
                <div className='form-data'>
                <label>local Government Area</label>
                    <input
                    type="text"
                    name='lga'
                    placeholder="Local government"
                    value={formProfile.lga}
                    onChange={(e) => {
                        setFormProfile({ ...formProfile, lga: e.target.value });
                    }}
                    />
                </div>
                <button >Submit</button>
            </div>
        </form>
    </section>
  )
}

export default Profile1