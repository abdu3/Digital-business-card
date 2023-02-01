import React from "react";
import logo from '../logo.svg';

function Header(){
    return (
      <header >
          <nav className='nav'>
            <img className='nav--icon' src={logo} alt="logo"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title ">React Course-Project-1</h4>
            {/* <ul className='nav-item'>
              <li>Pricing</li>
              <li> About</li>
              <li>Contact</li>
            </ul> */}
          </nav>
      </header>
    )
  }
  export default Header;