import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import userFilter from '../../../images/Frame-695.svg'     

const FilterSwitch =() => {

const [isActive, setIsActive] = useState(false);

 
  return(
      <div>
        <div 
          onClick={() => setIsActive(!isActive)}
          className='user-filter'>
          <h3 className='titleHead' >User</h3>
          <div className='filter-options'>
              <img src={userFilter} alt=''/>
              <p>filter</p>
            <div className="">
                {isActive ? 
                
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                :
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                }
            </div>
          </div>
        </div>
        {isActive && 
              
          <div className="filter-choices">
            <div></div>
            <div >
              <Link to='/filter'>
                <span className='select-filters'>All</span> 
              </Link>
              <span className='select-filters' >Active</span> 
              <span className='select-filters' >Inactive</span>
            </div>
          </div>
          
          }
    </div>
  )
}

export default FilterSwitch







// onClick={() => setIsSelect(!isSelect)}
// style={isSelect ? 'color:blue;' : 'color:black;' }
// const [isSelect, setIsSelect] = useState(false);