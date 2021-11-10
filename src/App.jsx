// import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { Component } from 'react';
import Router from "./router/Router";
import NavbarTop from "./components/navbarTop/NavbarTop"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarTop/>
        <div className="App">
            <Router/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
