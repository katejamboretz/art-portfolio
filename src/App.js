import React, { Component } from 'react';
import NavTabs from "./components/NavTabs"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import './App.css'


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
          </div>
        </Router>
      </div>
    );


  }
}

export default App;
