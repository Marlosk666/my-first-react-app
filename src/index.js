import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'It is my first post', likesCount: 5 },
  { id: 3, message: 'Hi, how are you?', likesCount: 12 },
  { id: 4, message: 'It is my first post', likesCount: 5 }
];

let dialogs = [
  { id: 1, name: 'Ana Bergman' },
  { id: 2, name: 'Pavel Tulkin' },
  { id: 3, name: 'Masha Muracheva' },
  { id: 4, name: 'Alexandr Arzhanuknin' },
  { id: 5, name: 'Ekaterina Dolgikh' },
  { id: 6, name: 'Anna Vaganova' },

];

let messages = [
  { id: 1, message: 'Hello there' },
  { id: 2, message: 'Hey, gonna go out today?' },
  { id: 3, message: 'Call me when you will back home' },
  { id: 4, message: 'Whats up cutie' },
  { id: 5, message: 'Look what i found on tik-tok' },
  { id: 6, message: 'That meme is about us lol' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
