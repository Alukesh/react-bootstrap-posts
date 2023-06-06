import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header/Header'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import UserPosts from './pages/UserPosts/UserPosts';
import AlternateHeader from './components/Layout/Header/AlternateHeader';
import Footer from './components/Layout/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({type:'LOAD_POSTS'})
  // }, [])

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/user/:id' element={<UserPosts/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
