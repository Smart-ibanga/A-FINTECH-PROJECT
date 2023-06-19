import React from 'react'
import HeaderB from '../../AdminComponents/HeaderB'
import Sidebar from '../../AdminComponents/SidebarB'

function AddQuestion() {

  return (
    <div>
      <HeaderB />
      <div className="containerA">
          <div className='asideA'>
            <Sidebar />
          </div>
        <form>
          <label>Question</label>
          <input
            type= 'text'
            name='question'
            value=''
          />

          <label>Answer</label>
          <input
            type= 'text'
            name='answer'
            value=''
          />
          <button>Done</button>
        </form>
      </div>
    </div>
  )
}

export default AddQuestion