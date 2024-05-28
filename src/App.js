import React, { useState } from 'react';
import './App.css';
import { FaSignOutAlt } from 'react-icons/fa';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <div>Home Content</div>;
      case 'procedure1':
        return <div>Procedure 1 Content</div>;
      case 'procedure2':
        return <div>Procedure 2 Content</div>;
      case 'progress':
        return <div>Student Progress Content</div>;
      case 'leaderboard':
        return <div>Leaderboard Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      case 'signout':
        return <div>Signed Out</div>;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-left">
          <button onClick={() => setCurrentSection('home')}>Home</button>
          <div className="dropdown">
            <button className="dropbtn">Procedures</button>
            <div className="dropdown-content">
              <button onClick={() => setCurrentSection('procedure1')}>Procedure 1</button>
              <button onClick={() => setCurrentSection('procedure2')}>Procedure 2</button>
            </div>
          </div>
          <button onClick={() => setCurrentSection('progress')}>Progress</button>
          <button onClick={() => setCurrentSection('leaderboard')}>Leaderboard</button>
        </div>
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropbtn">User</button>
            <div className="dropdown-content">
              <button onClick={() => setCurrentSection('settings')}>Settings</button>
              <button onClick={() => setCurrentSection('profile')}>Profile</button>
              <button onClick={() => setCurrentSection('signout')}>
                Sign Out <FaSignOutAlt />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
