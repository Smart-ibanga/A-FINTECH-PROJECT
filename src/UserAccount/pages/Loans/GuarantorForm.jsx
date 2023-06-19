import React from 'react'



const GuarantorForm = ({ formData, setFormData }) => {

  return (
        <section>
              <div className='form-data'>
                <label>First Name</label>
                  <input 
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={formData.fname}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, fname: e.target.value });
                  }}
                  />
              </div>
              <div className='form-data'>
                <label>Last Name</label>
                  <input 
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, lname: e.target.value });
                  }}
                  />
              </div>
                    
              <div className='form-data'>
                  <label>Phone Number</label>
                  <input 
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  />
              </div>
              <div className='form-data'>
                  <label>Email</label>
                  <input 
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  />
              </div>
              <div className='form-data'>
              <label>Address</label>
                <input 
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                required
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                }}
                />
              </div>
        </section>
  )
}

export default GuarantorForm