import React from 'react'



function UserAccountDetail ({ formData, setFormData }) {

   return(
        <section>
            <div className='form-data'>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email..."
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className='form-data'>
              <label>Old Password</label>
              <input
                type="password"
                placeholder="Last Name..."
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </div>
            <div className='form-data'>
              <label>Enter New Password</label>
              <input
                type="password"
                placeholder="New Password"
                value={formData.changePassword}
                onChange={(e) => {
                  setFormData({ ...formData, changePassword: e.target.value });
                }}
                />
            </div>
        </section>  
      )
   }

export default UserAccountDetail



// <div className='id-card'>
//     <input type='radio' id="passport" />
//     <label for="passport">International passport</label>
//     <input type='radio' id="national-id" />
//     <label for="national-id" >National Id</label>
//     <input type='radio' id="licence"/>
//     <label for="licence">Drivers Licence</label>
// </div>