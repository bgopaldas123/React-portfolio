import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import Project from './Project';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
    </Switch>
  )
}

export default Routes;