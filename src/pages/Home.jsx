import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AddMovies from '../components/Addmovies'

const Home = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({})

  useEffect(()=> {
      setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  useEffect(() => {
    if (!user){
      return navigate('/login')
    }
  },[])


  return (
   <div>
    <div>
        
        <AddMovies/>
    </div>
   </div>
  )
}

export default Home
