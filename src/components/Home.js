import React from "react";
import '../styles/home.css';
import logo from '../logo.svg';

// home page
class Home extends React.Component {

  render() { 
    return(
    <div>

        <nav class="navbar navbar-expand-sm navbar-light">
          <div class="font" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/get-started">Get Started</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/get-started">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        </div>
        
        <span>
        <h1>
          Welcome
          <img src={logo} className="App-logo" alt="logo" style={{width:"50px",height:"50px", padding:"0px"}}/>
        </h1>
        </span>

        <h6>Learn about technology, using technology
        </h6>  
        

        <span  style={{display: "block", padding:"0px", margin:'0px'}}>
          <input style={{margin: "0px"}} class="form-control col-md-4 mx-auto " type="search" placeholder="Search" aria-label="Search"/>
          <button style={{margin: "0px"}} class="btn btn-outline-success mx-auto" type="submit">Search</button>
        </span>
    </div>

    )
  }
}


export default Home;