import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import CoursePreview from './components/CoursePreview';
import Phishing from './components/Phishing';

ReactDOM.render(
  <React.StrictMode>

    <NavBar/>
    <BrowserRouter>
        <Route path={"/"} exact={true} component={Home}/>
        <Route path="/get-started" exact={true} component={GetStarted}/>
        <Route path="/profile" exact={true} component={CoursePreview}/>
        <Route path="/phishing" exact={true} component={Phishing}/>
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
