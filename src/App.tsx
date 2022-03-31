import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path = '/' element = {<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
