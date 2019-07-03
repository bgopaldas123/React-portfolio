import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Pic from '../assets/img/portrait.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <main id="about">
            <h1 className="lg-heading">
              About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
              Let me tell about a few things...
            </h2>
            <div className="about-info">
              <img src={Pic} alt="Braja" className="bio-image" />
              <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p>I am a Web Developer and I enjoy turning complex problems into simple, beautiful and intuitive designs. I’ve always sought out opportunities and challenges that are meaningful to me.</p>
              </div>
            </div>

            <div className="job">
              <h2>Part Coder</h2>
              <p>HTML / CSS</p>
              <p>SASS</p>
              <p>Bootstrap</p>
              <p>Javascript</p>
              <p>Angular</p>
              <p>Angular JS</p>
            </div>
          </main>
        <Footer />
      </div>
    )
  }
};

export default About;