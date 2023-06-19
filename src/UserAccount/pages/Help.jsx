import React from 'react'
import HelpImage from "../../images/Illustration.svg"
import Accordion from './Accordion';
import { accordionData } from './HelpQuestions';

const Help = () => {

  return (
    <section className='side-flex'>
      <div className='help-menu'>
        <div className='help-image-text'>
          <div className='help-text'>
            <h3>Get in touch</h3>
            <br></br>
            <p>Check our frequently asked<br></br>
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
      </div>
    </section>
         
  )
}

export default Help

