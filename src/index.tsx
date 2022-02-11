import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./components/LoginPage/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import HeaderMain from "./components/HeaderMain/HeaderMain";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <HeaderMain/>
          <Routes>
              <Route path='/' element={<LoginPage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/about' element={<AboutPage/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
