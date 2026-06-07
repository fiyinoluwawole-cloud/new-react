import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/moviediv.css"

const MovieDiv = ({ moviesArray }) => {
  return (
    <div className='moviediv'>
      {
        moviesArray.length === 0
          ? "No movies yet, add a movie to see it here"
          : moviesArray.map((movie, index) => (
              <Link to={`/moviedetails/${movie.name}`} className='smallbox' key={index}>
                <img
                  src={movie.image}
                  alt={movie.name}
                  width="150"
                />

                <h3>{movie.name}</h3>
                <p>{movie.description}</p>
              </Link>
            ))
      }
    </div>
  )
}

export default MovieDiv