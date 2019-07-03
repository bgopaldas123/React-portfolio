import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">  
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            {/* <li className="nav-item current"> */}
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">About me</Link>
            </li>
            <li className="nav-item">
              <Link to={"/work"} className="nav-link">My Work</Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">How To Reach Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
};

export default Navbar;