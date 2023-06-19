import React from 'react'

function Amount({ formData, setFormData }) {
  return (
        <div className='loansAmount'>
            <section>
                <div className='form-data' >
                <label>Enter Amount</label>  
                    <input 
                    type="text"
                    placeholder="Minimum of  ₦100,000"
                    name="principal"
                    value={formData.principal}
                    required
                    onChange={(e) => {
                        setFormData({ ...formData, principal:e.target.value });
                    }}
                    />
                </div>
               
                <br />
                <p style={{textAlign: "center"}}><b>Collateral must be at least 200% the value of loan</b></p>
                <br />
                <div className='form-data'>
                    <label  htmlFor='term'>Loan Duration</label> 
                    
                    <select
                     id="term" 
                     name="term"   
                     value={formData.term}
                     onChange={(e) => {
                        setFormData({ ...formData, term:e.target.value });
                      }}
                     
                     >
                        <option disabled  value='' >0</option>
                        <option value="3">3 </option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        
                    </select>
                
                    <p>months</p>
                    
                    <span style={{color: "blue"}} >(Payment within 3 - 6 months)</span>
                    <br />
                </div>
                <br />
                <div className='form-data'>
                    <p style={{display: "none"}} >Product id</p>
                    <input 
                        type="radio"
                        name="product_id " 
                        value="1" 
                        id="hidden"
                        checked={formData.product_id === "1"}
                        style={{display: "none"}}
                        onChange={(e) => {
                        setFormData({ ...formData, product_id:e.target.value });
                        }}

                    />
                    <label htmlFor='hidden' style={{display: "none"}} >1</label>
                    <input
                        disabled
                        type="hidden" 
                        name="product_id "
                        value="hidden"
                        id="hidden" 
                        checked={formData.product_id  === '2'}
                        onChange={(e) => {
                            setFormData({ ...formData, product_id: e.target.value });
                        }}

                    />
                    <label  htmlFor='hidden' style={{display: "none"}} >2</label>
                    <input 
                        
                        type="hidden" 
                        name="product_id "
                        value="hidden"
                        id="hidden" 
                        checked={formData.product_id === '3'}  
                        onChange={(e) => {
                        setFormData({ ...formData, product_id: e.target.value });
                        }}

                        />
                    <label  htmlFor='hidden' style={{display: "none"}} >3</label>
                </div> 
                <br />
            </section>
        </div>
  )
}

export default Amount