import React from 'react'
import { useNavigate } from 'react-router-dom';
import HelpImage from "../../../images/Illustration.svg"
import Accordion from './Accordion';
import { accordionData } from './HelpQuestions';

const FAQ = () => {

  let navigate = useNavigate();
    
  const routeHelp = () => {
    let path = '/add';
    navigate(path);
  };

  return (
    <section className='help side-flex'>
        <label  className="addImages" onClick={routeHelp} >
            <i className='add-questions fas fa-plus-circle'></i> 
        </label>
        <div className='help-image-text'>
          <div className='help-text'>
            <h3>Get in touch</h3>
            <p>check our frequently asked<br></br>
            question to easily use our app</p>
          </div>
          <div className='help-image'>
              <img src={HelpImage} alt=''/>
          </div>
        </div>
        <h3>FAQ's</h3>
        <div className="accordion" >
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
    </section>
         
  )
}

export default FAQ

