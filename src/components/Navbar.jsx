import React, {useState} from 'react'
import "../styles/navbar.css"

const Navbar = () => {

    const [name, setName] = useState("Ade")
    const [counter, setCounter] = useState(0)

    const handleName = () => {
        if (name == "Ade"){
             setName("Bisi")
        }else(
            setName("Ade")
        )
    }

    const handleCount = () => {
        if (counter < 10000){
            setCounter(counter + 1)
        }
    }

    const styles = {
        "backgroundColor" : "green",
        "color" : "white"           
    }


  return (
    <>
    <div className='nav'>
        
     <div className='logo'>Logo</div>

     <div className='links'>
        <a style={styles} href="">Home</a>
        <a style={styles} href="">Movies</a>
        <a style={styles} href="">Last Search</a>
     </div>

     <button onClick={handleName}>Change name</button>
   
    </div>

    <h1>hello {name}, welcome to the Movies</h1>
        <h2>Count: {counter}</h2>
          <button onClick={handleCount}>+1</button>
        </>
  )
}

export default Navbar
