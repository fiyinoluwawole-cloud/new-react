import React, {useState} from 'react'

const Addmovies = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])
    const [editIndex, setEditIndex] = useState(null)

     const handleMovies = () => {
        setMovies([...movies, movieName])
        setMovieName("")
     }

        const editMovieName = (id) => {
            setEditIndex(id)
            setMovieName(movies[id])

        }

        const updateMovies = () => {
            movies.splice(editIndex, 1, movieName)
            setMovies([...movies])
            setEditIndex(null)
            setMovieName("")
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
        <button onClick={handleMovies}>Add</button>
        <button onClick={updateMovies}>Update</button>

        {movies.map((movieName, id) => (
            <div key={id}>
                <h1>{movieName}</h1>
                <button onClick={() => editMovieName(id)}>Edit</button>
                <button onClick={() => deleteMovie(id)}>Delete</button>
            </div>
        ))}
    </div>
  );
};

export default Addmovies
