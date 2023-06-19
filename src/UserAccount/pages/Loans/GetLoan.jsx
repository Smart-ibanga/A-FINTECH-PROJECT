import React, {useState} from 'react'
import HeaderX from '../../components/HeaderX';
import Sidebar from '../../components/Sidebar';
import CollateralCategory from './CollateralCategory';
import Amount from './Amount';
import GuarantorForm from './GuarantorForm';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const GetLoan = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        address: "",
        phone: "",
        email: "",
        principal: "",
        term:"",
        product_id:"1",
        name: "",
        describtion: "",
        category: "",
      });

      console.log(formData)

      const formDetails1= {

        principal: formData.principal,
        term:formData.term,
        product_id: formData.product_id,
       
      }

      const formDetails2= {

        name: formData.name,
        describtion: formData.describtion,
        category: formData.category
      }

      const formDetails3= {

        fname: formData.fname,
        lname: formData.lname,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
      }
    
      const FormTitles = ["Amount", "Collateral Category", "Guarantor"];

      const navigate = useNavigate()
    
      const PageDisplay = () => {
        if (page === 0) {
          return <Amount formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
          return <CollateralCategory  formData={formData} setFormData={setFormData} />;
        } else {
          return <GuarantorForm formData={formData} setFormData={setFormData} />;
        }
      };

  const handleSubmit = async(e) => {
      e.preventDefault()

    if (page === FormTitles.length - 1) {

        // send http request
            try {
              const url = "https://dev.symoletech.com.ng/public/api/v1/loan/apply";

            const {data: res}=  await axios.post(url, formData)
            console.log(res)
            swal("Completed!!!",(res.data.message),"success")
            navigate( "/home/history" );
            } 
            catch (error) {
              console.log(error.message)
              if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
              ) {
                swal("Warning",(error.message),"warning")
                
              }  
          };

      } else {
        setPage((currPage) => currPage + 1);
      }

  }


  const validate1 = () => {
    return formData.principal.length && formData.term.length && formData.product_id.length;
  };
  
  const validate2 = () => {
    return formData.name.length && formData.describtion.length && formData.category.length;
  };

  const validate3 = () => {
    return formData.fname.length && formData.lname.length && formData.address.length && formData.phone.length && formData.email.length;
  };
  
  const validation = () => {
    if (page === 0) {
      return !validate1()
    } else if (page === 1) {
      return !validate2()
    } else {
      return !validate3()
    }
  }

  return (
    <section className='loansAmount'>
        <div className='get-a-loan'>
              <h1>{FormTitles[page]}</h1>
              <br />
              {PageDisplay()}
              <div className="footer">
              <button
                  disabled={page === 0}
                  onClick={() => {
                  setPage((currPage) => currPage - 1);
                  }}
              >
                  Prev
              </button>
              <span style={{margin: ".5rem"}} />
              <button
                disabled={
                  page === 0 && !validate1()
                
                }  
                onClick={handleSubmit}
              >
               {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
              </div>
        </div>      
    </section>
  )
}

export default GetLoan