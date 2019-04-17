import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>QA games</h1>
        <HashRouter>
          <ul className="navbar">
            <li><NavLink to ="/game1" className="navlink">game1</NavLink></li>
            <li><NavLink to ="/game2" className="navlink">game2</NavLink></li>
            <li><NavLink to ="/game3" className="navlink">game3</NavLink></li>
            <li><NavLink to ="/game4" className="navlink">game4</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/game1" render={()=><h2>game 1</h2>}/>
            <Route path="/game2" render={()=><h2>game 2</h2>}/>
            <Route path="/game3" render={()=><h2>game 3</h2>}/>
            <Route path="/game4" render={()=><h2>game 4</h2>}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
