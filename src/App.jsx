import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header/Header'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import UserPosts from './pages/UserPosts/UserPosts';
import AlternateHeader from './components/Layout/Header/AlternateHeader';
import Footer from './components/Layout/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  console.log(store);


  return (
    <>
    <AlternateHeader/>
      <button onClick={() => dispatch({type:'LOAD_POSTS'})}>Posts</button>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/user-posts' element={<UserPosts/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
