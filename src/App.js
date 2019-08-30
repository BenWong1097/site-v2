import React from 'react';
import './App.css';

import Data from './Data';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar items={Data.NavList}/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
