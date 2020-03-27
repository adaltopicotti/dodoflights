import React from 'react';
import './App.css';

import logo from './assets/logo.png'

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <a href="/" >
        <img src={logo} alt="Dodo Flights"/>
      </a>
      <div className="content">
        <Routes />
      </div>
      <footer>
        Copyright © 2020 by dodoflights.com.
      </footer>
    </div>
  );
}

export default App;
