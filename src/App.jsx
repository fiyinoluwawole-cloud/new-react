import React from 'react'
import{Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nabar from './components/Nabar'
import AddMovies from './components/Addmovies'
import MovieDiv from './components/MovieDiv'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Lastsearch from './pages/Lastsearch'  
import Moviedetails from './pages/Moviedetails'
import Api from './components/Api'

const App = () => {
  return (
    <>
    {/* <div>Cinema</div> */}
    {/* <Navbar/> */}
    {/* <Button/> */}
      {/* <Hero/> */}
      {/* <AddMovies/> */}
      {/* <MovieDiv/> */}
     <Nabar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/last-search' element={<Lastsearch/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/moviedetails/:movieName' element={<Moviedetails/>}/>
        <Route path='/api' element={<Api/>}/>

      </Routes>
   
  </>
    
  )
}

export default App
