import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link className='link' to = '/dashboard/services'>Services</Link>
        <Link className='link' to = '/dashboard/orders'>Orders</Link>
        <Link className='link' to = '/dashboard/others'>Others</Link>
        <Link className='link' to = '/dashboard/settings'>Settings</Link>
        <Link className='link' to = '/dashboard/privacy'>Privacy</Link>
    </div>
  )
}

export default Sidebar
