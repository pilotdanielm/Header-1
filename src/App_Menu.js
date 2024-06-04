import React, { useState } from 'react';
import {FaStar, FaPaperPlane, FaLock } from 'react-icons/fa';
import emergencyProcedureImage from './images/Emergency-Procedure.png';
import preFlightProcedureImage from './images/Pre-Flight-Procedure.png';
import CFIImage from './images/CFI.png';
import placeholderImage from './images/placeholder.png';
import square from './images/square.png';
import procedureTrainer from './images/Procedure-Trainer.png';
import './App.css';

// ProceduralTrainer Component

export const ProceduralTrainer = ({ handleProcedureSelect }) => {
  // const today = new Date();
  // const options = { weekday: 'long', month: 'long', day: 'numeric' };
  // const formattedDate = today.toLocaleDateString('en-US', options);

  const [procedures, setProcedures] = useState([
    { id: 1, title: "Emergency\n Procedures", progress: 50, image: emergencyProcedureImage, isStarred: false },
    { id: 2, title: "Pre-Flight\n Procedures", progress: 0, image: preFlightProcedureImage, isStarred: false },
    { id: 3, title: "CFI", progress: 25, image: CFIImage, isStarred: false },
    { id: 4, title: "Scenario \n Trainer", progress: 0, image: procedureTrainer, isStarred: false },
    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 5,
      title: `Coming \n Soon ${i + 5}`,
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
      case 4:
        handleProcedureSelect('ProcedureTrainerSection');
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
  ]);

  return (
    <div>
      {/* <div className="procedural-trainer-header">
        <span>{formattedDate}</span>
        <h1>Procedural Trainer</h1>
      </div> */}
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

// EmergencyProcedure Component



export const EmergencyProcedure = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Engine Out\nin flight",
    stars: 3,
    completed: true,
    percentage: 50,
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
    {
      id: 1,
      title: "Engine Out\nin flight",
      stars: 3,
      completed: true,
      percentage: 50,
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
    },
    {
      id: 2,
      title: "Engine Fire\nIn Flight",
      stars: 3,
      completed: true,
      percentage: 0,
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
    },
    { id: 3, title: "Electrical Fire\nIn Flight", stars: 0, completed: false, percentage: 0 },
    { id: 4, title: "Coming \n Soon", stars: 0, completed: false, percentage: 0 },
    { id: 5, title: "Coming \n Soon", stars: 0, completed: false, percentage: 0 },
    { id: 6, title: "Coming \n Soon", stars: 0, completed: false, percentage: 0 }
  ];

  const handleClick = (procedure) => {
    if (procedure.completed) {
      setActiveProcedure(procedure);
    }
  };

  const isNextProcedureLocked = (index) => {
    if (index === 0) return false; // Skip locking the first procedure
    return procedures[index - 1].percentage <= 49;
  };

  const isNextProcedureHighlighted = (index) => {
    if (index === 0) return false; // Skip highlighting the first procedure
    return procedures[index - 1].percentage > 49;
  };

  return (
    <div className="secondcontainer">
      {procedures.map((procedure, index) => (
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
                <svg className="dashed-line" width="500" height="500">
                  <path
                    d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="30,30" // Dashed pattern
                  />
                </svg>
              </>
            )}
            {procedure.id === 3 && (
              <svg className="dashed-line" width="500" height="500">
                <path
                  d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 3
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="30,30" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 5 && (
              <svg className="dashed-line" width="500" height="500">
                <path
                  d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 5
                  stroke="#cccccc" // Line color
                  strokeWidth="7" // Line width
                  fill="none" // No fill for the path
                  strokeDasharray="30,30" // Dashed pattern
                />
              </svg>
            )}
            {procedure.id === 2 && (
              <>
                {!isNextProcedureLocked(index) && (
                  <svg className="progress1-circle1" width="220" height="220">
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
                      strokeDasharray="628.32"
                      strokeDashoffset="471.24" /* 628.32 * 0.75 (75% remaining, 25% progress) */
                      strokeLinecap="round"
                      fill="none"
                      transform="rotate(-90 110 110)"
                    />
                  </svg>
                )}
                <svg className="dashed-line" width="500" height="500">
                  <path
                    d="M 20 440 C 25 220, 20 70, 340 25"
                    stroke="#cccccc"
                    strokeWidth="7"
                    fill="none"
                    strokeDasharray="30,30"
                  />
                </svg>
              </>
            )}
            {procedure.id === 4 && (
              <svg className="dashed-line" width="500" height="500">
                <path
                  d="M 20 440 C 25 220, 20 70, 340 25"
                  stroke="#cccccc"
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray="30,30"
                />
              </svg>
            )}
            <button
              className={`secondbutton button-${procedure.id} ${!procedure.completed || isNextProcedureLocked(index) ? 'locked' : ''} ${isNextProcedureHighlighted(index) ? 'highlighted' : ''}`}
              onClick={() => handleClick(procedure)}
              disabled={!procedure.completed || isNextProcedureLocked(index)}
            >
              {(!procedure.completed || isNextProcedureLocked(index)) ? <FaLock className="lock-icon" /> : null}
            </button>
          </div>
          <div className={`starsb starsb-${procedure.id}`}>
            {Array.from({ length: 3 }).map((_, i) => (
              <FaStar
                key={i}
                className={`starb ${
                  procedure.id === 1
                    ? i < 2
                      ? 'filledb'
                      : 'unfilledb'
                    : procedure.id === 2 && !isNextProcedureLocked(index) && i < 1
                    ? 'filledb'
                    : 'unfilledb'
                }`}
              />
            ))}
          </div>
          <div className={`title title-${procedure.id}`}>
            {procedure.title.split('\n').map((line, index) => (
              <div key={index} className={`title-line ${index === 0 ? 'thick' : 'thin'}`}>
                {line}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="modal">
        <div className="modal-content">
          <div className="starsb-and-percentageb">
            {Array.from({ length: 3 }).map((_, i) => (
              <FaStar
                key={i}
                className={`starb ${
                  activeProcedure.id === 1
                    ? i < 2
                      ? 'filledb'
                      : 'unfilledb'
                    : activeProcedure.id === 2 && i < 1
                    ? 'filledb'
                    : 'unfilledb'
                }`}
              />
            ))}
            <span className="percentage">{activeProcedure.percentage}%</span>
          </div>
          <h1>{activeProcedure.title}</h1>
          <p>{activeProcedure.content}</p>
          <button className="start-button">Start</button>
        </div>
      </div>
    </div>
  );
};
// PreFlightProcedure Component

export const PreFlightProcedure = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Coming \n Soon",
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
    { id: 1, title: "Coming \n Soon", stars: 0, completed: true },
    { id: 2, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 3, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 4, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 5, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 6, title: "Coming \n Soon", stars: 0, completed: false }
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
                <svg className="dashed-line" width="500" height="500">
                  <path
                    d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="30,30" // Dashed pattern
                  />
                </svg>
                </>
                )}
                {procedure.id === 3 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 3
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 5 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 5
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 2 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 4 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
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

// CFI Component

export const CFI = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Coming \n Soon",
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
    { id: 1, title: "Coming \n Soon", stars: 1, completed: true },
    { id: 2, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 3, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 4, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 5, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 6, title: "Coming \n Soon", stars: 0, completed: false }
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
                <svg className="dashed-line" width="500" height="500">
                  <path
                    d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="30,30" // Dashed pattern
                  />
                </svg>
                </>
                )}
                {procedure.id === 3 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 3
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 5 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 5
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 2 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 4 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
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

// ProcedureTrainerSection Component

export const ProcedureTrainerSection = () => {
  const [activeProcedure, setActiveProcedure] = useState({
    id: 1,
    title: "Coming \n Soon",
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
    { id: 1, title: "Coming \n Soon", stars: 0, completed: true },
    { id: 2, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 3, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 4, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 5, title: "Coming \n Soon", stars: 0, completed: false },
    { id: 6, title: "Coming \n Soon", stars: 0, completed: false }
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
                <svg className="dashed-line" width="500" height="500">
                  <path
                    d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 1
                    stroke="#cccccc" // Line color
                    strokeWidth="7" // Line width
                    fill="none" // No fill for the path
                    strokeDasharray="30,30" // Dashed pattern
                  />
                </svg>
                </>
                )}
                {procedure.id === 3 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 3
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 5 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 25 C 220 70, 350 130, 340 460" // Adjusted curve path for button 5
                      stroke="#cccccc" // Line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 2 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
                    />
                  </svg>
                )}
                {procedure.id === 4 && (
                  <svg className="dashed-line" width="500" height="500">
                    <path
                      d="M 20 440 C 25 220, 20 70, 340 25"
                      stroke="#cccccc" // Different line color
                      strokeWidth="7" // Line width
                      fill="none" // No fill for the path
                      strokeDasharray="30,30" // Dashed pattern
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