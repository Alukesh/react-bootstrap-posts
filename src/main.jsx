import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HistoryRouter as Router } from "redux-first-history/rr6";
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, history } from './redux/index';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  //  </React.StrictMode>,
)
