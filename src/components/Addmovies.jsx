import React, {useState} from 'react'
import Parent from './Parent';

const Addmovies = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [keyword, setKeyword] = useState("")

    const filtered = movies.filter(movieName => movieName.includes(keyword))

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

        <button onClick={handleMovies}>Add</button>
        <button onClick={updateMovies}>Update</button>

        <input type="text" placeholder='search for movies' onChange={handleSearch} />

        {
            filtered.map((movieName) => {
            const originalIndex = movies.indexOf(movieName)

        return (
            <div key={originalIndex}>
            <h1>{movieName}</h1>

            <button onClick={() => editMovieName(originalIndex)}>
            Edit
            </button>

            <button onClick={() => deleteMovie(originalIndex)}>
             Delete
            </button>
        </div>
            )
            })
            }

            <Parent currentMovie = {movieName}/>
    </div>
  );
};

export default Addmovies
