import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container about'>
        <span>About Me</span>
        <img
          src='https://genesismusiclessons.files.wordpress.com/2012/10/scott-alton-bass-pic-1.jpg?w=636'
          alt='Scott Alton playing bass guitar with illEvans!.'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quis suscipit totam iste doloremque debitis
          quasi maxime sapiente ullam saepe.
        </p>
      </div>
      <div className='sidebar-container categories'>
        <span>Categories</span>
        <ul className='categories-list'>
          <li className='category-item'>React</li>
          <li className='category-item'>JavaScript</li>
          <li className='category-item'>Django</li>
          <li className='category-item'>Python</li>
          <li className='category-item'>100 Days of Code</li>
          <li className='category-item'>Entrepreneurship</li>
          <li className='category-item'>Productivity</li>
        </ul>
      </div>
      <div className='sidebar-container social'>
        <span>Follow</span>
        <div className='social-links'>
          <i className='fab fa-twitter-square'></i>
          <i className='fab fa-github-square'></i>
          <i className='fab fa-linkedin'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
