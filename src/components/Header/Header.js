import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      {' '}
      <div className='header'>
        <div className='header-title'>
          <h2>Alton Media</h2>
          <h1>Coding Blog</h1>
        </div>
      </div>
      <img
        src='https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='Desk setup with a MacBook, pen, paper, and coffee.'
        className='header-img'
      />
    </div>
  );
};

export default Header;
