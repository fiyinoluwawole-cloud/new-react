import React from "react";

import "../styles/movies.css";

const movies = [
  {
    name: "Sofia",
    image: "/sofia.jpg"
  },
  {
    name: "Mickey Mouse",
    image: "/mickey mouse.webp"
  },
  {
    name: "Thunderman",
    image: "/thunderman.jpg"
  },
  {
    name: "Elena of Avalor",
    image: "/elena.jpg"
  },
  {
    name: "Dora",
    image: "/dora.webp"
  }
];

const Movies = () => {
  return (
    <div className="movies-page">

      <h1 className="movies-title">Available Movies</h1>

      <div className="movies-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={movie.image}
              alt={movie.name}
              className="movie-image"
            />

            <h3 className="movie-name">{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;