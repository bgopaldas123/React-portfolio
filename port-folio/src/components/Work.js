import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Project1 from '../assets/img/projects/project1.jpg';
import Project2 from '../assets/img/projects/project2.jpg';
import Project3 from '../assets/img/projects/project3.jpg';
import Project4 from '../assets/img/projects/project4.jpg';
import Project5 from '../assets/img/projects/project5.jpg';

class Work extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main id="work">
          <h1 className="lg-heading">
            My <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">
            Checkout some of my project...
          </h2>
          <div className="projects">
            <div className="item">
              <a href="#!">
                <img src={Project1} alt="projects" />
              </a>
              <a href="#" className="btn btn-light">
                <i className="fa fa-eye"></i> Project
              </a>
              <a href="https://github.com/Braja123/my_portfolio" className="btn btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img src={Project2} alt="projects" />
              </a>
              <a href="#" className="btn btn-light">
                <i className="fa fa-eye"></i> Project
              </a>
              <a href="https://github.com/Braja123/Love_calc" className="btn btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img src={Project3} alt="projects" />
              </a>
              <a href="#" className="btn btn-light">
                <i className="fa fa-eye"></i> Project
              </a>
              <a href="https://github.com/Braja123/color_picker" className="btn btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img src={Project4} alt="projects" />
              </a>
              <a href="#" className="btn btn-light">
                <i className="fa fa-eye"></i> Project
              </a>
              <a href="https://github.com/Braja123/BMI-Calculator" className="btn btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img src={Project5} alt="projects" />
              </a>
              <a href="#" className="btn btn-light">
                <i className="fa fa-eye"></i> Project
              </a>
              <a href="https://github.com/Braja123/ludo_pro" className="btn btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
};

export default Work;