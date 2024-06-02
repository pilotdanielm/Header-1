import React, { useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSignOutAlt, FaUser, FaStar, FaPaperPlane, FaLock } from 'react-icons/fa';
import './App.css';
import logoRed from './images/NAVI-Logo-red.png';
import logoWhite from './images/NAVI-Logo.png';
import emergencyProcedureImage from './images/Emergency-Procedure.png';
import preFlightProcedureImage from './images/Pre-Flight-Procedure.png';
import CFIImage from './images/CFI.png';
import placeholderImage from './images/placeholder.png';
import square from './images/square.png';

// ProceduralTrainer Component
const ProceduralTrainer = ({ handleProcedureSelect }) => {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const [procedures, setProcedures] = useState([
    { id: 1, title: "Emergency\n Procedures", progress: 50, image: emergencyProcedureImage, isStarred: false },
    { id: 2, title: "Pre-Flight\n Procedures", progress: 0, image: preFlightProcedureImage, isStarred: false },
    { id: 3, title: "CFI", progress: 25, image: CFIImage, isStarred: false },
    ...Array.from({ length: 17 }, (_, i) => ({
      id: i + 4,
      title: `Procedure ${i + 4}`,
      progress: 0, 
      image: placeholderImage, isStarred: false
    }))
  ]);

  const toggleStar = (id) => {
    const updatedProcedures = procedures.map(procedure => {
      if (procedure.id === id) {
        return {...procedure, isStarred: !procedure.isStarred};
      }
      return procedure;
    });
    setProcedures(updatedProcedures);
  };

  const handleProcedureClick = (id) => {
    switch (id) {
      case 1:
        handleProcedureSelect('Emergency Procedures');
        break;
      case 2:
        handleProcedureSelect('Scenarios'); 
        break;
      case 3:
        handleProcedureSelect('CFI'); 
        break;
      default:
        console.log('Procedure not found');
        break;
    }
  };

  const titles = ["Engine Out", "Engine Fire"];
  const [recentProcedures] = useState(Array.from({ length: 20 }, () => ({
    title: titles[Math.floor(Math.random() * titles.length)],
    stars: Math.floor(Math.random() * 4),  
    image: square 
  })));

  return (
    <div>
      <div className="procedural-trainer-header">
        <span>{formattedDate}</span>
        <h1>Procedural Trainer</h1>
      </div>
      <div className="procedures-container">
        {procedures.map((procedure) => (
          <div key={procedure.id} className="procedure" style={{ backgroundImage: `url(${procedure.image})` }}
               onClick={() => handleProcedureClick(procedure.id)}>
            <h2>
              {procedure.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < procedure.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="sub-heading">some sub heading here</p>
            <p className="progress">{procedure.progress}%</p> 
            <div className="icons">
              <FaPaperPlane className='cursor'/>
              <FaStar className={`stara ${procedure.isStarred ? 'starreda' : ''}`} onClick={(e) => { e.stopPropagation(); toggleStar(procedure.id); }} />
            </div>
          </div>
        ))}
      </div>
      <div className="recent-procedures-container">
        {recentProcedures.map((proc, index) => (
          <div key={index} className="recent-procedure" style={{ backgroundImage: `url(${proc.image})` }}>
            <div className="procedure-stars">
              {Array.from({ length: 3 }).map((_, i) => (
                <FaStar key={i} className={i < proc.stars ? 'starfilled' : 'starone'} />
              ))}
            </div>                        
            <div className="proceduretitle">{proc.title}</div>
            <div><p className='flight'>During Flight</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// EmergencyProcedure Component

const EmergencyProcedure = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Engine Out\nin flight",
    stars: 3,
    completed: true,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu posuere mi, 
              ac ultrices elit. Suspendisse eu neque nec orci pellentesque accumsan.
              • Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              • Aliquam tincidunt mauris eu risus.
              • Vestibulum auctor dapibus neque.
              • Nunc dignissim risus id metus.
              Ut euismod eu velit imperdiet fermentum. Fusce laoreet mi vitae ante posuere 
              ullamcorper. Cras vel orci quam. Duis viverra libero quis magna finibus euismod. 
              Suspendisse potenti. Pellentesque sit amet tempor orci. Praesent elementum lacus 
              et sapien porttitor, et tincidunt turpis egestas. Curabitur congue tincidunt velit, 
              quis rhoncus turpis dapibus at.`
  });

  const procedures = [
    { id: 1, title: "Engine Out\nin flight", stars: 3, completed: true },
    { id: 2, title: "Engine Fire\nIn Flight", stars: 0, completed: false },
    { id: 3, title: "Electrical Fire\nIn Flight", stars: 0, completed: false },
    { id: 4, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 5, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 6, title: "Procedure\nPlaceholder", stars: 0, completed: false }
  ];

  const handleClick = (activeProcedure) => {
    if (activeProcedure.completed) {
      setActiveProcedure(activeProcedure);
    }
  };

  return (
    <div className="secondcontainer">
      {procedures.map((procedure) => (
        <div key={procedure.id} className="secondwrapper">
          <div className="progress-container">
            {procedure.id === 1 && (
              <>
                <div className="start-box">Start</div>
                <svg className="progress-circle" width="220" height="220">
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    stroke="#ff0042"
                    strokeWidth="10"
                    strokeDasharray="628.32" /* 2 * Math.PI * 100 */
                    strokeDashoffset="408.41" /* 628.32 * 0.65 (65% remaining, 35% progress) */
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 110 110)" /* Rotate the circle to start from the top */
                  />
                </svg>
              </>
            )}
            <button
              className={`secondbutton button-${procedure.id} ${!procedure.completed ? 'locked' : ''}`}
              onClick={() => handleClick(activeProcedure)}
              disabled={!procedure.completed}
            >
              {!procedure.completed ? <FaLock className="lock-icon" /> : null}
            </button>
          </div>
          <div className={`starsb starsb-${procedure.id}`}>
            {Array.from({ length: 3 }).map((_, i) => (
              <FaStar key={i} className={`starb ${procedure.id === 1 ? (i < 2 ? 'filledb' : 'unfilledb') : 'unfilledb'}`} />
            ))}
          </div>
          <div className={`title title-${procedure.id}`}>
            {procedure.title.split('\n').map((line, index) => (
              <div key={index} className={`title-line ${index === 0 ? 'thick' : 'thin'}`}>{line}</div>
            ))}
          </div>
        </div>
      ))}

      <div className="modal">
        <div className="modal-content">
          <div className="starsb-and-percentageb">
            <FaStar className="starb filledb" />
            <FaStar className="starb filledb" />
            <FaStar className="starb unfilledb" />
            <span className="percentage">50%</span>
          </div>
          <h1>{activeProcedure.title}</h1>
          <p>{activeProcedure.content}</p>
          <button className="start-button">Start</button>
        </div>
      </div>
    </div>
  );
};

//Pre Flight Component

const PreFlightProcedure  = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Procedure\nPlaceholder",
    stars: 3,
    completed: true,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu posuere mi, 
              ac ultrices elit. Suspendisse eu neque nec orci pellentesque accumsan.
              • Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              • Aliquam tincidunt mauris eu risus.
              • Vestibulum auctor dapibus neque.
              • Nunc dignissim risus id metus.
              Ut euismod eu velit imperdiet fermentum. Fusce laoreet mi vitae ante posuere 
              ullamcorper. Cras vel orci quam. Duis viverra libero quis magna finibus euismod. 
              Suspendisse potenti. Pellentesque sit amet tempor orci. Praesent elementum lacus 
              et sapien porttitor, et tincidunt turpis egestas. Curabitur congue tincidunt velit, 
              quis rhoncus turpis dapibus at.`
  });

  const procedures = [
    { id: 1, title: "Procedure\nPlaceholder", stars: 3, completed: true },
    { id: 2, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 3, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 4, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 5, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 6, title: "Procedure\nPlaceholder", stars: 0, completed: false }
  ];

  const handleClick = (activeProcedure) => {
    if (activeProcedure.completed) {
      setActiveProcedure(activeProcedure);
    }
  };

  return (
    <div className="secondcontainer">
      {procedures.map((procedure) => (
        <div key={procedure.id} className="secondwrapper">
          <div className="progress-container">
            {procedure.id === 1 && (
              <>
                <div className="start-box">Start</div>
                <svg className="progress-circle" width="220" height="220">
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="100"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    strokeDasharray="628.32" /* 2 * Math.PI * 100 */
                    strokeDashoffset="408.41" /* 628.32 * 0.65 (65% remaining, 35% progress) */
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 110 110)" /* Rotate the circle to start from the top */
                  />
                </svg>
              </>
            )}
            <button
              className={`secondbutton button-${procedure.id} ${!procedure.completed ? 'locked' : ''}`}
              onClick={() => handleClick(activeProcedure)}
              disabled={!procedure.completed}
            >
              {!procedure.completed ? <FaLock className="lock-icon" /> : null}
            </button>
          </div>
          <div className={`starsb starsb-${procedure.id}`}>
            <FaStar className="starb unfilledb" />
            <FaStar className="starb unfilledb" />
            <FaStar className="starb unfilledb" />
          </div>
          <div className={`title title-${procedure.id}`}>
            {procedure.title.split('\n').map((line, index) => (
              <div key={index} className={`title-line ${index === 0 ? 'thick' : 'thin'}`}>{line}</div>
            ))}
          </div>
        </div>
      ))}

      <div className="modal">
        <div className="modal-content">
          <div className="starsb-and-percentageb">
            <FaStar className="starb unfilledb" />
            <FaStar className="starb unfilledb" />
            <FaStar className="starb unfilledb" />
            <span className="percentage">0%</span>
          </div>
          <h1>{activeProcedure.title}</h1>
          <p>{activeProcedure.content}</p>
          <button className="start-button">Start</button>
        </div>
      </div>
    </div>
  );
};


//CFI Component

const CFI  = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Procedure\nPlaceholder",
    stars: 3,
    completed: true,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu posuere mi, 
              ac ultrices elit. Suspendisse eu neque nec orci pellentesque accumsan.
              • Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              • Aliquam tincidunt mauris eu risus.
              • Vestibulum auctor dapibus neque.
              • Nunc dignissim risus id metus.
              Ut euismod eu velit imperdiet fermentum. Fusce laoreet mi vitae ante posuere 
              ullamcorper. Cras vel orci quam. Duis viverra libero quis magna finibus euismod. 
              Suspendisse potenti. Pellentesque sit amet tempor orci. Praesent elementum lacus 
              et sapien porttitor, et tincidunt turpis egestas. Curabitur congue tincidunt velit, 
              quis rhoncus turpis dapibus at.`
  });

  const procedures = [
    { id: 1, title: "Procedure\nPlaceholder", stars: 3, completed: true },
    { id: 2, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 3, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 4, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 5, title: "Procedure\nPlaceholder", stars: 0, completed: false },
    { id: 6, title: "Procedure\nPlaceholder", stars: 0, completed: false }
  ];

  const handleClick = (activeProcedure) => {
    if (activeProcedure.completed) {
      setActiveProcedure(activeProcedure);
    }
  };

  return (
    <div className="secondcontainer">
      {procedures.map((procedure) => (
        <div key={procedure.id} className="secondwrapper">
          <div className="progress-container">
            {procedure.id === 1 && (
              <>
                <div className="start-box">Start</div>
                <svg className="progress-circle" width="220" height="220">
                <circle
                  cx="110"
                  cy="110"
                  r="100"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="100"
                  stroke="#ff0042"
                  strokeWidth="10"
                  strokeDasharray="628.32" // 2 * Math.PI * 100
                  strokeDashoffset="471.24" // 628.32 * 0.75 (75% remaining, 25% progress)
                  strokeLinecap="round"
                  fill="none"
                  transform="rotate(-90 110 110)" // Rotate the circle to start from the top
                />
              </svg>
              </>
            )}
            <button
              className={`secondbutton button-${procedure.id} ${!procedure.completed ? 'locked' : ''}`}
              onClick={() => handleClick(activeProcedure)}
              disabled={!procedure.completed}
            >
              {!procedure.completed ? <FaLock className="lock-icon" /> : null}
            </button>
          </div>
          <div className={`starsb starsb-${procedure.id}`}>
            {Array.from({ length: 3 }).map((_, i) => (
              <FaStar key={i} className={`starb ${procedure.id === 1 ? (i < 1 ? 'filledb' : 'unfilledb') : 'unfilledb'}`} />
            ))}
          </div>
          <div className={`title title-${procedure.id}`}>
            {procedure.title.split('\n').map((line, index) => (
              <div key={index} className={`title-line ${index === 0 ? 'thick' : 'thin'}`}>{line}</div>
            ))}
          </div>
        </div>
      ))}

      <div className="modal">
        <div className="modal-content">
          <div className="starsb-and-percentageb">
          <FaStar className="starb filledb" />
            <FaStar className="starb unfilledb" />
            <FaStar className="starb unfilledb" />
            <span className="percentage">25%</span>
          </div>
          <h1>{activeProcedure.title}</h1>
          <p>{activeProcedure.content}</p>
          <button className="start-button">Start</button>
        </div>
      </div>
    </div>
  );
};


// Main App Component
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
        return <PreFlightProcedure/>;
      case 'CFI':
        return <CFI/>;
      case 'signout':
        return <div>Signed Out Content</div>;
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
            <FaSignOutAlt className="logout-icon"/> Logout
          </button>
        </div>
        <div className={`content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {renderSection()}
        </div>
      </div>
    </Router>
  );
};

export default App;
