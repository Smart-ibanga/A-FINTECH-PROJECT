import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import Header from './Header'
import Sidebar from './SidebarB'

function AdminLayout() {

  const {user}= useAuth()
  
  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div>
        <Header />
        <div className='containerA' >
            <div className='asideA'>
                <Sidebar />
            </div>
            <Outlet/>
        </div>

    </div>
  )
}

export default AdminLayout