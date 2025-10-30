import React, { Component } from 'react';
import './NavBar.css';
import CibLogo from '../assets/ciblogo.png'; 

const NavBar = () => {
    return ( 

            <header className="header-container">
      <div className="header-content">
        <img src={CibLogo} alt="CIB Logo" className="cib-logo" />        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item active">About Us</li>
            <li className="nav-item">Investor Relations</li>
            <li className="nav-item">Responsible Banking</li>
            <li className="nav-item">Newsroom</li>
            <li className="nav-item">Learning Center</li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">Others</li>
          </ul>
        </nav>
      </div>
    </header> 





     );
}
 
export default NavBar ;