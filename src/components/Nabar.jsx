import React from "react";
import "../styles/nabar.css";

const Navbar = () => {
  return (
    <div className="nav">

      <h1>Cinema</h1>

      <div className='links'>
        <a href="">Home</a>
        <a href="">Movies</a>
        <a href="">Last Search</a>
     </div>

    </div>
  );
};

export default Navbar;