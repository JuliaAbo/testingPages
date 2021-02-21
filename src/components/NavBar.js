import React from "react";

class NavBar extends React.Component {

  render() { 
    return(
    <div>

        <nav class="navbar navbar-expand-sm navbar-light">
          <div class="font" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/get-started">Get Started</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        </div>
    
    </div>

    )
  }
}


export default NavBar;