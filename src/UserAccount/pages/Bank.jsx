import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderX from '../components/HeaderX';
import Sidebar from '../components/Sidebar';

function Bank() {

    const [validBank, setValidBank] = useState({

        name: '',
        bvn:'',
        statement:[],
        acc_name:'',
        acc_num:''

    })

    const navigate = useNavigate();
    const routeBank = async(e) =>{
        e.preventDefault()

        const formData = new FormData();

        formData.append('name',validBank.name)
        formData.append('bvn',validBank.bvn)
        formData.append('statement',validBank.statement)
        formData.append('acc_name',validBank.acc_name)
        formData.append('acc_num',validBank.acc_num)

        // send http request

      try {
        const url = "https://dev.symoletech.com.ng/public/api/v1/bank";

        const {data: res} = await axios.post(url, formData )
        console.log(res.data);
        swal("Bank status",(res.data),"success")
        navigate("/home/loans");
      } 
      catch (error) {
        console.log(error.message)
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          )
        {
        swal("Error",(error.message),"error")
        }
	    };

    }

  return (
     <section  className="bank" >
            <div className='valid-bank'>
                <h1>Valid Bank Details</h1>
                <form onSubmit={routeBank}   encType="multipart/form-data">
                    <div className='form-data'>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={validBank.name}
                        onChange={(e) => {
                            setValidBank({ ...validBank, name: e.target.value });
                        }}
                        />
                    </div>
                
                    <div className='form-data'>
                    <label>Bvn</label>
                        <input
                        type="tel"
                        placeholder="BVN"
                        name="bvn"
                        value={validBank.bvn}
                        onChange={(e) => {
                            setValidBank({ ...validBank, bvn: e.target.value });
                        }}
                        />
                    </div>
                    <div className='form-data'>
                        <label htmlFor='uploadFile'>Statement</label>
                        <input 
                        type='file' 
                        name='statement'
                        accept="application/pdf" 
                        id='uploadFile'
                        value={validBank.statement}
                        onChange={(e) => {
                            setValidBank({ ...validBank, statement: e.target.files[0] }); }}

                        />
                 
                    </div>
                    <div className='form-data'>
                    <label>Account Name</label>
                        <input
                        type="tel"
                        placeholder="Account Name"
                        name="acc_name"
                        value={validBank.acc_name}
                        onChange={(e) => {
                            setValidBank({ ...validBank, acc_name: e.target.value });
                        }}
                        />
                    </div>
                    <div className='form-data'>
                    <label>Account Number</label>
                    
                        <input
                        type="tel"
                        placeholder="Account Number"
                        name="acc_num"
                        value={validBank.acc_num}
                        onChange={(e) => {
                            setValidBank({ ...validBank, acc_num: e.target.value });
                        }}
                        />
                    </div>
                    <button >Submit</button>
                </form>
            </div>
     </section>
  )
}

export default Bank