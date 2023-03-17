import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 5 },
    { id: 3, message: 'Hi, how are you?', likesCount: 12 },
    { id: 4, message: 'It is my first post', likesCount: 5 }
  ];

  let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount} />)


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts; 