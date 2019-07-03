import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Pic from "../img/gopal.jpg";
import Education from './Education';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={Pic} alt="gopal photo" style={{height: '200px'}} />
            </div>
            <h2 style={{textAlign: 'center'}}>Braja Gopal Das</h2>
            <h4 style={{paddingTop: '2em', color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>
              I am a Web Developer and I enjoy turning complex problems into simple, beautiful and intuitive designs. I’ve always sought out opportunities and challenges that are meaningful to me.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>Ameerpet, Hyderabad, Telengana, 53000</p>
            <h5>Phone</h5>
            <p>8598070566, 9348151963</p>
            <h5>Email</h5>
            <p>brajagopaldas77@gmail.com</p>
            <h5>Git</h5>
            <p>https://github.com/Braja123</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2011} 
              endYear={2013}
              schoolName="Intermediate"
              schoolDescription="Rural Institute of Higher Studies, Balasore, Odisha" />
            <Education 
              startYear={2013} 
              endYear={2016}
              schoolName="Bachelore of Computer Science"
              schoolDescription="Academy of Business Administration, Balasore, Odisha" />
            <Education 
              startYear={2016} 
              endYear={2018}
              schoolName="Master in Computer Application"
              schoolDescription="Institute of Management and Information Technology, Cuttack, Odisha" />
              <hr style={{borderTop: "3px solid #e22947"}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={70} 
              />
              <Skills
                skill="Javascript"
                progress={80} 
              />
              <Skills
                skill="Angular JS"
                progress={75} 
              />
              <Skills
                skill="React JS"
                progress={50} 
              />
              <Skills
                skill="Vue JS"
                progress={55} 
              />
              <Skills
                skill="Node JS"
                progress={40} 
              />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;