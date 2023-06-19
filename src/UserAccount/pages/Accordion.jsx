import React, {useState} from 'react'

const Accordion =( { title, content }) => {

const [isActive, setIsActive] = useState(false);

  return(
    <div className="accordion-item" >
        <div 
        onClick={() => setIsActive(!isActive)}
        className='questions'>
        <div className='asked-question'>{title}</div>
        <div className="arrow-toggle">
            {isActive ? 
            
            <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
            :
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
            }
        </div>
        </div>
        {isActive && <div className="answers"><br></br>{content}</div> }
    </div>
  )
}

export default Accordion