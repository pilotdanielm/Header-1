import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { ProceduralTrainer, EmergencyProcedure, PreFlightProcedure, CFI, ProcedureTrainerSection } from './App_Menu';
import './App.css';
import logoRed from './images/NAVI-Logo-red.png';
import logoWhite from './images/NAVI-Logo.png';

const App = () => {
  const [currentSection, setCurrentSection] = useState('trainer');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogoClick = () => {
    setCurrentSection('trainer');
    if (sidebarOpen) {
      toggleSidebar();
    }
  };

  const handleProcedureSelect = (section) => {
    setCurrentSection(section);
    if (sidebarOpen) {
      toggleSidebar();
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'account':
        return <div>My Account Content</div>;
      case 'Emergency Procedures':
        return <EmergencyProcedure />;
      case 'Scenarios':
        return <PreFlightProcedure />;
      case 'CFI':
        return <CFI />;
      case 'signout':
        return <div>Signed Out Content</div>;
      case 'ProcedureTrainerSection': // Add this case
        return <ProcedureTrainerSection />;
      default:
        return <ProceduralTrainer handleProcedureSelect={handleProcedureSelect} />;
    }
  };

  return (
    <Router>
      <div className="App">
        <header className={`navbar ${sidebarOpen ? 'open' : ''}`}>
          <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
          <img src={sidebarOpen ? logoWhite : logoRed} alt="Navi Logo" className="logo" onClick={handleLogoClick} />
        </header>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            <button onClick={() => handleProcedureSelect('account')}>
              <FaUser className="icon-my-account" /> My Account
            </button>
            <button onClick={() => handleProcedureSelect('Emergency Procedures')}>
              Emergency Procedures
            </button>
            <button onClick={() => handleProcedureSelect('Scenarios')}>
              Scenarios
            </button>
            <button onClick={() => handleProcedureSelect('CFI')}>
              CFI
            </button>
          </div>
          <button className="logout-btn" onClick={() => handleProcedureSelect('signout')}>
            <FaSignOutAlt className="logout-icon" /> Logout
          </button>
        </div>
        <div className={`content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {renderSection()}
        </div>
      </div>
    </Router>
  );
};

export default App;
