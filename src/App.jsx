import React, { useState, useEffect} from 'react'
import{Route, Routes, Navigate, useLocation} from 'react-router-dom'
import Nabar from './components/Nabar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Lastsearch from './pages/Lastsearch'  
import Moviedetails from './pages/Moviedetails'
import Api from './components/Api'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import Dashboard from './pages/Dashboard'
import Services from './components/Services'
import Orders from './components/Orders'
import Others from './components/Others'
import Settings from './components/Settings'
import Privacy from './components/Privacy'

const App = () => {


  const location = useLocation();

  console.log(location.pathname);
  
  const shouldHaveNavbar = ['/home', '/movies', '/last-search']

  console.log(shouldHaveNavbar.includes(location.pathname));

  const displayNav = shouldHaveNavbar.includes(location.pathname)
  
  return (
    <>
      {displayNav && <Nabar/>}
     <Nabar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/last-search' element={<Lastsearch/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/moviedetails/:movieName' element={<Moviedetails/>}/>
        <Route path='/api' element={<Api/>}/>

        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='/dashboard/services' element = {<Services/>}/>
        <Route path='/dashboard/orders' element = {<Orders/>}/>
        <Route path='/dashboard/others' element = {<Others/>}/>
        <Route path='/dashboard/settings' element = {<Settings/>}/>
        <Route path='/dashboard/privacy' element = {<Privacy/>}/>
        </Route>

        <Route path='*' element={<Notfound/>}/>
      </Routes>
   
  </>
    
  )
}

export default App
