import React, {useState} from 'react'
import "../styles/navbar.css"

const Navbar = () => {

    const [name, setName] = useState("Ade")


    const handleName = () => {
        if (name == "Ade"){
             setName("Bisi")
        }else(
            setName("Ade")
        )
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
    <input type="text" onChange={e => setName(e.target.value)} />

    <button onClick={handleName}>Hi, {name}</button>
     </div>

        </>
  )
}

export default Navbar
