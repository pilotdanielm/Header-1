import React, { useState } from 'react';
import {FaStar, FaPaperPlane, FaLock } from 'react-icons/fa';
import emergencyProcedureImage from './images/Emergency-Procedure.png';
import preFlightProcedureImage from './images/Pre-Flight-Procedure.png';
import CFIImage from './images/CFI.png';
import placeholderImage from './images/placeholder.png';
import square from './images/square.png';
import './App.css';

export const ProceduralTrainer = ({ handleProcedureSelect }) => {
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
        return { ...procedure, isStarred: !procedure.isStarred };
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

  const [recentProcedures] = useState([
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
    { title: "Engine Out", stars: 3, image: square },
    { title: "Engine Out", stars: 1, image: square },
    { title: "Engine Out", stars: 2, image: square },
  ]);

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
              <FaPaperPlane className='cursor' />
              <FaStar className={`stara ${procedure.isStarred ? 'starreda' : ''}`} onClick={(e) => { e.stopPropagation(); toggleStar(procedure.id); }} />
            </div>
          </div>
        ))}
      </div>
      <div className="recent-procedures-header">
        <span>Recent Procedures</span>
      </div>
      <div className="recent-procedures-container">
        {recentProcedures.map((proc, index) => (
          <div key={index} className="recent-procedure" style={{ backgroundImage: `url(${proc.image})` }}
            onClick={() => handleProcedureSelect('Emergency Procedures')}>
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

export const EmergencyProcedure = () => {
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
                    strokeDashoffset="314.16" /* 628.32 * 0.5 (50% remaining, 50% progress) */
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 110 110)"
                  />
                </svg>
                <svg className="dashed-line" width="400" height="400">
                  <path
                    d="M 10 10 C 210 40, 300 130, 315 350" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="20,20" // Dashed pattern
                  />
                </svg>
              </>
            )}
            {procedure.id === 3 && (
              <svg className="dashed-line2" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 3
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 5 && (
              <svg className="dashed-line5" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 5
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 2 && (
              <svg className="dashed-line3" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 4 && (
              <svg className="dashed-line4" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
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

export const PreFlightProcedure = () => {
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
                    strokeDashoffset="408.41" /* 628.32 * 0.65 (0% progress) */
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 110 110)"
                  />
                </svg>
                <svg className="dashed-line" width="400" height="400">
                  <path
                    d="M 10 10 C 210 40, 300 130, 315 350" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="20,20" // Dashed pattern
                  />
                </svg>
              </>
            )}
            {procedure.id === 3 && (
              <svg className="dashed-line2" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 3
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 5 && (
              <svg className="dashed-line5" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 5
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 2 && (
              <svg className="dashed-line3" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 4 && (
              <svg className="dashed-line4" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
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

export const CFI = () => {
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
                    transform="rotate(-90 110 110)"
                  />
                </svg>
                <svg className="dashed-line" width="400" height="400">
                  <path
                    d="M 10 10 C 210 40, 300 130, 315 350" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="20,20" // Dashed pattern
                  />
                </svg>
              </>
            )}
            {procedure.id === 3 && (
              <svg className="dashed-line2" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 3
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 5 && (
              <svg className="dashed-line5" width="400" height="400">
                <path
                  d="M 10 10 C 210 40, 300 130, 325 350" // Adjusted curve path for button 5
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 2 && (
              <svg className="dashed-line3" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 4 && (
              <svg className="dashed-line4" width="400" height="400">
                <path
                  d="M 10 390 C 30 190, 120 100, 340 100"
                  stroke="#cccccc" // Different line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="20,20" // Dashed pattern
                />
              </svg>
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