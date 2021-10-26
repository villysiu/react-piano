// import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="navbar"> 
        <NavLink to="/"><button type="button" >Home</button></NavLink>
        &nbsp;
     
        <NavLink to="/musics/new"><button type="button">Create Music</button></NavLink>
    </div>
  );
}

export default NavBar;