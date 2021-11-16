import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img
        src='https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
        alt='A desktop and laptop coding setup.'
        className='post-img'
      />
      <div className='post-details'>
        <div className='post-categories'>
          <span className='post-category'>Python</span>
          <span className='post-category'>Coding</span>
        </div>
        <h2 className='post-title'>Python Test Post #1</h2>
        <hr />
        <span className='post-date'>November 15, 2021</span>
      </div>
      <p className='post-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut mollitia neque sint? Dicta maxime
        dignissimos, rerum, ipsa commodi accusantium aliquam iure veritatis nisi eveniet doloribus illo dolorem quod
        velit aliquid, officiis nihil? Voluptatum.
      </p>
    </div>
  );
};

export default Post;
