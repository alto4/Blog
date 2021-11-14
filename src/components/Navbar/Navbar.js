import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <i className='fab fa-twitter-square'></i>
        <i className='fab fa-github-square'></i>
        <i className='fab fa-linkedin'></i>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li className='nav-link'>Home</li>
          <li className='nav-link'>About</li>
          <li className='nav-link'>Contact</li>
          <li className='nav-link'>Post</li>
          <li className='nav-link'>Logout</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img
          className='user-profile-img'
          src='https://genesismusiclessons.files.wordpress.com/2012/10/scott-alton-bass-pic-1.jpg?w=636'
          alt='Scott Alton playing bass guitar with illEvans!'
        />
        <i className='fa fa-search'></i>
      </div>
    </div>
  );
};

export default Navbar;
