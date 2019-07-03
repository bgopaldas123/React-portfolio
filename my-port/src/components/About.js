import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Pic from '../img/gopal.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-background">
      <div style={{width: '80%', margin: 'auto'}}>
        <Grid className="about-me">
          <Cell col={12}>About <span className="text-secondary">Me</span></Cell>
        </Grid>
        <p className="about-para">Let me tell about a few things...</p>
        <Grid>
          <Cell col={4}>
            <img className="bio-image" src={Pic} alt="gopal pic" style={{height: '250px', width: '250px', borderRadius: '50%'}} />
          </Cell>
          <Cell col={8}>
            <h2 className="bio">BIO</h2>
            <h4 className="bio-data">
              I am a Web Developer and I enjoy turning complex problems into simple, beautiful and intuitive designs. I’ve always sought out opportunities and challenges that are meaningful to me.</h4>
          </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default About;