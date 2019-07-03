import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
