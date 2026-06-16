import React from 'react'
import Sidebar from '../components/Sidebar'
import {Outlet} from 'react-router-dom'
import  "../styles/dashboard.css"

const Dashboard = () => {
  return (
    <div>
        <div className='dashboard'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
