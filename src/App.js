import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProceduralTrainer, EmergencyProcedure, PreFlightProcedure, CFI, ProcedureTrainerSection } from './App_Menu';
import './App.css';
import logoRed from './images/NAVI-Logo-red.png';
import logoWhite from './images/NAVI-Logo.png';
import '@fortawesome/fontawesome-free/css/all.css';

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
            <button className="size" onClick={() => handleProcedureSelect('account')}>
            <i class="fa-solid fa-user" /> My Account
            <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="size" onClick={() => handleProcedureSelect('Emergency Procedures')}>
            <i class="fa-solid fa-triangle-exclamation" /> Emergency Procedures
            <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="size" onClick={() => handleProcedureSelect('Scenarios')}>
            <i class="fa-solid fa-plane-circle-exclamation"/>  Scenarios
            <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="size" onClick={() => handleProcedureSelect('CFI')}>
            <i class="fa-solid fa-chalkboard-user" />  CFI
            <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <button className="logout-btn" onClick={() => handleProcedureSelect('signout')}>
            <i class="fa-solid fa-right-from-bracket" />  Logout
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
