import React from "react";
import ReactDOM from 'react-dom';
import '../styles/home.css';
import logo from '../logo.svg';

// home page
class Home extends React.Component {

  render() { 
    return(
    <div class="centered">
        <span>
        <h1> 
          Welcome
          <img src={logo} className="App-logo" alt="logo" style={{width:"50px",height:"50px", padding:"0px"}}/>
        </h1>
        </span>

        <h6>Learn about technology, using technology
        </h6>  
        
        <div class="row">

        <form class="form-inline" style={{width:"100%"}}>
          <input style={{margin:"0px"}} class="form-control mx-auto " type="search" placeholder="Search" aria-label="Search"/>
          <button class="float-right" style={{margin: "0px"}} class="btn btn-outline-success mx-auto" type="submit">Search</button>
        </form>
        </div>
    </div>

    )
  }
}


export default Home;