import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://play-lh.googleusercontent.com/jkpabs01pnEU5Jc9U3MuWdwwoWi8v7x33RZNYyLP2T8a2j1csnjOy3_-KI6JU8JntlNW' alt='cat-picture' />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  )
};

export default Post; 