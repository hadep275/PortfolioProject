import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import About from '../Src/components/About';
import Projects from '../Src/components/Projects';
import Contact from '../Src/components/Contact';
import Navigation from './components/Navigation';
import Skills from '../Src/components/Skills';
import Blog from '../Src/components/Blog';


function App() {


  return (
    <div className="app">
      <Navigation/> 
      {/* <Header /> */}
      <main>
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Blog/>
      </main>
    </div>
  );
}

export default App;
