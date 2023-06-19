import React from "react";

const PersonalInfo = ({formData, setFormData }) => {
  return (
    <section >
      <div className='form-data'>
        <label>FirstName</label>
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
      <label>LastName</label>
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
      <label>Date Of Birth</label>
        <input
          type="date"
          placeholder="Date of birth"
          value={formData.dateOfBirth}
          onChange={(e) => {
            setFormData({ ...formData, dateOfBirth: e.target.value });
          }}
        />
      </div>
      <div className='form-data'>
      <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
        />
      </div>
      <div className='form-data'>
      <label>Address</label>
        <input
          type="text"
          placeholder="State Of Origin"
          value={formData.stateOfOrigin}
          onChange={(e) => {
            setFormData({ ...formData, stateOfOrigin: e.target.value });
          }}
        />
      </div>
    </section>
  );
}

export default PersonalInfo;