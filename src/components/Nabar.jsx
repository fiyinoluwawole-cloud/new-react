import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nabar.css";

const Nabar = () => {
  return (
    <div className="nav">

      <h1>Cinema</h1>

      <div className='links'>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/home">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/movies">Movies</NavLink>
        <NavLink className={({isActive}) => isActive ? "underline" : ""} to="/last-search">Last Search</NavLink>
     </div>

    </div>
  );
};

export default Nabar;