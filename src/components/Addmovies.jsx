import React, {useState} from 'react'
import Parent from './Parent';
import MovieDiv from './MovieDiv';

const Addmovies = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [keyword, setKeyword] = useState("")
    const [movieImage, setMovieImage] = useState("")
    const [description, setDescription] = useState("")

    const filtered = movies.filter(movie =>
    movie.name.toLowerCase().includes(keyword.toLowerCase())
    )

       const handleMovies = () => {
         const updatedMovies = [
           ...movies,
           {
              name: movieName,
              image: movieImage,
              description: description
        }
      ];

         setMovies(updatedMovies);

         localStorage.setItem(
          "movies",
          JSON.stringify(updatedMovies)
        );

        setMovieName("");
        setMovieImage("");
        setDescription("");};
     

        const editMovieName = (id) => {

         setEditIndex(id);
         setMovieName(movies[id].name);
         setMovieImage(movies[id].image);
         setDescription(movies[id].description);
};
        

        const updateMovies = () => {

         movies.splice(editIndex, 1, {
            name: movieName,
            image: movieImage,
            description: description
        });

        setMovies([...movies]);

        localStorage.setItem(
         "movies",
          JSON.stringify([...movies])
        );

        setEditIndex(null);
        setMovieName("");
        setMovieImage("");
        setDescription("");
        };


        // const deleteMovie = (id) => {
        //     movies.splice(id, 1)
        //     setMovies([...movies])
        // }

        //OR

            const deleteMovie = (index) => {
            setMovies(movies.filter((_, id)  => id !== index))
        }

        const handleSearch = (e) => {
        setKeyword(e.target.value)

        }

        

  return (
    <div>
      <h1>Addmovie</h1>

        <input 
        onChange={e => setMovieName(e.target.value)}
        type="text" 
        placeholder='add your movie' 
        value={movieName}
        />

        <input
        type="file"
        accept="image/*"
        onChange={(e) => {
        const file = e.target.files[0];

        if (file) {
          setMovieImage(URL.createObjectURL(file));
          }
          }}
        />

        <textarea
        placeholder="Enter movie description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={handleMovies}>Add</button>
        <button onClick={updateMovies}>Update</button>

        <input type="text" placeholder='search for movies' onChange={handleSearch} />

        {
            filtered.map((movie) => {
            const originalIndex = movies.indexOf(movie)

        return (
            <div key={originalIndex}>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            {/* <img src={movie.image} alt={movie.name} /> */}

            <button onClick={() => editMovieName(originalIndex)}>
            Edit
            </button>

            <button onClick={() => deleteMovie(originalIndex)}>
             Delete
            </button>
            </div>
            )})}

            <Parent currentMovie = {movieName}/>

            <MovieDiv moviesArray={movies}/>
    </div>
  );
};

export default Addmovies
