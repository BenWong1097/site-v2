import React from 'react';
import './App.css';

import Data from './Data';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';

function App() {
  return (
    <div className="App">
      <Navbar items={Data.NavList}/>
      <Landing/>
      <About section={0} skills={Data.Skills} about={Data.About}/>
      <Experience section={1} experience={Data.Experience}/>
      <Projects section={2} projects={Data.Projects}/>
      <Contact section={3} contact={Data.Contact}/>
      <Footer/>
      <QuickContact contact={Data.Contact}/>
    </div>
  );
}

export default App;
