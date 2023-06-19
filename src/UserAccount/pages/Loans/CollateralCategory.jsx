import React from 'react'



const CollateralCategory = ({ formData, setFormData }) => {

 

  return (
        <div className='loanCollateral'>
          <div className='form-data'>
            <label>Title</label>
            <input 
              type='text'
              name='name'
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}

              />
          </div>
          <div className='form-data'>
            <label>description</label>
            <input 
              type='text'
              name='description'
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}

              />
          </div>
        
          <div className='form-data'>
          <p><b>Collateral Category</b></p>
              <input 
                type="radio"
                 name="category" 
                 value="jewelry" 
                 id="jewelry"
                 checked={formData.category === "jewelry"}
                 onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                }}

                 />
              <label htmlFor='jewelry'>Jewelry & articles</label>
   
              <input
               type="radio" 
               name="category"
               value="electronics"
               id="electronics" 
               checked={formData.category === 'electronics'}
               onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
              }}

               />
              <label htmlFor='electronics'>Electronics & Gadgets</label>
          
              <input 
                type="radio" 
                name="category"
                value="automobiles"
                id="automobiles" 
                checked={formData.category === 'automobiles'}  
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                }}

                  />
              <label htmlFor='automobiles'>Cars & automobiles</label>
              <input 
                type="radio" 
                name="category"
                value="landed property"
                id="landed property" 
                checked={formData.category=== 'landed property'}  
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                }}

                  />
              <label htmlFor='automobiles'>Landed Property</label>
          </div>
          <br />
          <br />
        </div>
  )
}

export default CollateralCategory;