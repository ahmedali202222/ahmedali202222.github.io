/*import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Education from './Education';
import Home from "./Home";

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <header>
          <h1 style={{ color: 'blue' }}>Hello, I'm Ahmed Ali</h1>
          <p>Software Engineer | Web Developer | Data Analyst</p>
        </header>

        <nav>
          <Link to="/education" className="nav-button">
            View My Education
          </Link>
        </nav>

        <Routes>
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import tailwindcss from '@tailwindcss/vite'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 80, // Adjusts for fixed navbar height
              behavior: 'smooth'
          });
      }
  });
});
