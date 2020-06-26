import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <NavLink className='navbar-brand' to='/'>useContext</NavLink>
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink exact activeClassName='active' className='nav-item nav-link' to='/'>Home</NavLink>
          <NavLink exact activeClassName='active' className='nav-item nav-link' to='/about'>About</NavLink>
          <NavLink exact activeClassName='active' className='nav-item nav-link' to='/login'>Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
