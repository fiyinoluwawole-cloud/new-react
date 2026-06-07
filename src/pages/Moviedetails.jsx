import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const Moviedetails = () => {
  const [count, setCount] = useState(0);
  const {movieName} = useParams()

  const [foundMovie, setFoundMovie] = useState({})



  //useEffect(() => {}, []); run only once when the component mounts
  //useEffect(()=>{}); infinite run
  //useEffect(() => {}, [number]); run when something inside the array changes

  //infinite run
  // useEffect(() => {
  //   console.log("hello"); 
  // })

  //run only once when the component mounts
  //   useEffect(() => {
  //   setCount(count+1) 
  // }, [])

  // run when something inside the array changes
  //   useEffect(() => {
  //   setCount(count+1) 
  // }, [count])

  useEffect(() => {
   const userMovies = localStorage.getItem("movies")

   if(userMovies){
    const movies = JSON.parse(userMovies)
    const movie = movies.find(movie => movie.name == movieName)
    setFoundMovie(movie)
   }
  },[movieName])


  return (
    <div>
      <h1>Movie details page for {movieName}</h1>
      <h1>{foundMovie.name}</h1>
      <img src={foundMovie.image} alt="" />
      <h2>{foundMovie.description}</h2>
    </div>
  )
}

export default Moviedetails
