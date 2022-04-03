import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, BrowserRouter, Routes, useParams} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import TeamPage from './pages/TeamPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/board' element = {<BoardPage/>}/>
        <Route path='/team/:id' element={<TeamPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
