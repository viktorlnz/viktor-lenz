import React from 'react';

import './App.css';

import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <h1>Hello weirdos</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <Header />
      <Portfolio />
    </>
  );
}

export default App;
