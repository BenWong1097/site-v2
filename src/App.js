import React from 'react';
import './App.css';

import Data from './Data';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar items={Data.NavList}/>
      <Landing/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
