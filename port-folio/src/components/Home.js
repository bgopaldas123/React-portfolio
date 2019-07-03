import React, { Component } from 'react';
import Navbar from './Navbar';

class Home extends Component{
  state = {}

  render() {
    return (
      <div>
        <Navbar />
        <main id="home">
          <h1 className="lg-heading">
            Braja Gopal <span className="text-secondary">Das</span>
          </h1>
          <h2 className="sm-heading">
            Web Developer, Programmer & Designer
          </h2>

          <div className="icons">
            <a href="https://twitter.com/BrajaGo81785927">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/brajagopal.das.568">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/braja-gopal-das-059141155/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Braja123">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
      </div>
    )
  }
};

export default Home;