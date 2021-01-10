import React, { Component } from 'react';
import NavTabs from "./components/NavTabs"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/index";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import './App.css'
import PetPortraits from './components/pages/PetPortraits/index';
import Music from './components/pages/Music/index';
import Landscapes from './components/pages/Landscapes/index';


class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/pets" component={PetPortraits} />
            <Route path="/music" component={Music} />
            <Route path="/landscapes" component={Landscapes} />
          </div>
        </Router>
      </div>
    );


  }
}

export default App;
