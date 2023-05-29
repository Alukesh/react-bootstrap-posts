import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header/Header'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import UserPosts from './pages/UserPosts/UserPosts';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/user-posts' element={<UserPosts/>}/>
    </Routes>
    </>
  )
}

export default App
