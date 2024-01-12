import React, { useState } from 'react';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>CodeLab</h2>
      </div>
      <div className="content">
        <button className="menu-button" onClick={toggleNav}>
          Menu
        </button>
        {showNav && (
          <nav className="navbar">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
        )}
        <div className="main-content">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}

export default App;


