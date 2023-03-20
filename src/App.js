import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile posts={props.posts} />} /> 
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} /> 
            <Route path='/News' element={<News newsData={props.newsData} />} />
            <Route path='/Music' element={<Music musicData={props.musicData} />} />
            <Route path='/Settings' element={<Settings settingsData={props.musicData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
