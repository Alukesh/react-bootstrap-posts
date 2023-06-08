import { Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header/Header'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import UserPosts from './pages/UserPosts/UserPosts';
import AlternateHeader from './components/Layout/Header/AlternateHeader';
import Footer from './components/Layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
export const MAIN_ROUTE = 'MAIN_ROUTE';
export const ABOUT_ME = 'ABOUT_ME';
export const USER_DETAILS_ROUTE = 'USER_DETAILS_ROUTE';

export const routes = [
  {
    id: MAIN_ROUTE,
    path: "/",
    exact: true,
    element: <Home/>
  },
  {
    id: USER_DETAILS_ROUTE,
    path: "/user/:id",
    exact: true,
    element: <UserPosts/>
  },
  {
    id: ABOUT_ME,
    path: "/about-me",
    exact: true,
    element: <AboutMe/>
  },
]
/* Эта функция экспортируется для редакс саги. Там происходит проверка matchPath на событие изменения роутов 
  в случае если пути роутов полностью yf 100% схожи, происходи загрузка данных из jsonplaceholder и сохраняется в редакс
*/
export const getRouteConfig = id => {
  const route = routes.find(r => r.id === id);
  if (route) {
    const { element, ...rest } = route;

    return rest;
  }
}

function App() {


  return (
    <>
      <Header />
      <Routes>
        {
          routes.map(r => {
            const { id, ...props } = r;
            return (
              <Route key={id} {...props} />
            )
          })
        }
        {/* <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/user/:id' element={<UserPosts />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
