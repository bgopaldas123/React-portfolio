// import React, { Component } from "react";
// import { Grid, Cell } from 'react-mdl';
// import Pic from '../img/gopal.jpg'

// class Landingpage extends Component {
//   render() {
//     return (
//       <div style={{width: '100%', margin: 'auto'}}>
//         <Grid className="landing-grid">
//           <Cell col={12}>
//             <img src={Pic} alt="Gopal Photo" className="gopal-img" />
//             <div className="banner-text">
//               <h1>Full Stack Developer</h1>
//               <hr/>
//               <p>HTML/CSS | Bootstrap | Javascript | Angular | React | Vue | NodeJS</p>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
//     )
//   }
// }

// export default Landingpage;
import React, { Component } from "react";
// import { Grid, Cell } from 'react-mdl';
// import Pic from '../img/gopal.jpg'

class Landingpage extends Component {
  render() {
    return (
      <div id="bg-img">
        <main id="home">
        <h1 class="lg-heading">
            Braja Gopal <span class="text-secondary">Das</span>
        </h1>
        <h2 class="sm-heading">
            Web Developer, Programmer & Designer
        </h2>

        <div class="icons">
            <a href="https://twitter.com/BrajaGo81785927">
                <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/brajagopal.das.568">
                <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/braja-gopal-das-059141155/">
                <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Braja123">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>
    </main>
      </div>
    )
  }
}

export default Landingpage;