import React from "react";
import Button from 'react-bootstrap/Button';
import '../index.css';
import '../App.css';

// home page
class GetStarted extends React.Component {

  render() { 
    return(
    <div>
        <h1>What would you like to learn about?</h1> 
        <div class = "subject-toggles"> 
            <button type="button" class="btn btn-primary ml-3">Security</button>
            <button type="button" class="btn btn-primary ml-3">Office Skills</button>
            <button type="button" class="btn btn-primary ml-3">Email</button>
            <button type="button" class="btn btn-primary ml-3">Social Media</button>
        </div>
    </div>

    )
  }
}


export default GetStarted;