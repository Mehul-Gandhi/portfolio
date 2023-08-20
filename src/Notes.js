import React, { useState } from 'react';
import { Email } from '@mui/icons-material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import "./App.css"

function CS10Info() {
    return (
      <header className="masthead">
        <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, grey, #000080)', borderRadius: '20px', width: '100%', padding: '30px', border: '2px solid yellow' }}>
          <div className="container-fluid p-5" style={{ color: 'white', textAlign: 'center' }}>
            <h2 className="d-flex align-items-center justify-content-center" style={{ color: '#FFD700', marginBottom: '20px' }}>CS10 Fall 2023 Notes and Resources</h2>
            <p className="" style={{ color: '#FFD700', fontSize: '24px' }}><strong>Lab</strong>: Mondays and Wednesdays 8pm - 10pm <br />(Soda Hall Room 430-438, Wozniak Lounge)</p>
            <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
              <a href="mailto:gandhi@berkeley.edu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
                <Email sx={{ fontSize: 36, marginRight: 4 }} className="email-icon" />
                gandhi@berkeley.edu
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  const WeekHeader = ({ currentWeek }) => {

  
    const week = weeksData[currentWeek];
    return (
      <div>
        <h2 className="section-heading text-uppercase spaced">
          Week {currentWeek + 1} Announcements
        </h2>
        <h4>{week.date}</h4>
        <img src={"alonzo.svg"} alt="Alonzo Mascot" />
      </div>
    );
  };
  
  const weeksData = [

    {date: "August 19, 2023", content: [{heading: "Welcome to CS10!", subheading: [
        "Sign up for a section",
        "<strong>Note:</strong> Make sure to complete the <a href='/registration'>registration form</a>."
      ]}, {heading: "Hello world"}]},
    {date: "August 26, 2023", content: [{heading: "Welcome to Week 2!", subheading: ["Sign up for a section on Edstem!"]}, {heading: "Hello world"}]},
    // Add more weeks as needed
  ];
  
  const AnnouncementsContainer = () => {
    const [currentWeek, setCurrentWeek] = useState(weeksData.length - 1);
  
    const handlePrevWeek = () => {
      setCurrentWeek((currentWeek - 1 + weeksData.length) % weeksData.length);
    };
  
    const handleNextWeek = () => {
      setCurrentWeek((currentWeek + 1 + weeksData.length) % weeksData.length);
    };
  
    return (
        <div className="container">
          <div className="text-center">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="contained" onClick={handlePrevWeek}>
                  <ArrowBack />
                  Previous Week
                </Button>
                
              </div>
              <div >
                  <WeekHeader currentWeek={currentWeek} />
                </div>
              <Button variant="contained" onClick={handleNextWeek}>
                Next Week
                <ArrowForward />
              </Button>
            </div>
            {currentWeek >= 0 && currentWeek < weeksData.length && (
              <AnnouncementList announcements={weeksData[currentWeek].content} />
            )}
          </div>
        </div>
      );
            }
  


  const AnnouncementList = ({ announcements }) => {
    return (
        <div className="announcement">
            {announcements.map((announcement, index) => (
                <div key={index} className="announcement-item">
                    <h3 className=" announcement-heading">{announcement.heading}</h3>
                    <ul className="announcement-sublist">
                        {announcement.subheading && announcement.subheading.map((sub, subIndex) => (
                            <li key={subIndex}
                                dangerouslySetInnerHTML={{ __html: sub }}
                            ></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
  
  
  
export default function Notes() {
  
  const particlesInit = async (engine) => {
    // Initialize the tsParticles instance (engine) here, adding custom shapes or presets
    await loadFull(engine);
  };
  const particlesLoaded = async (container) => {
    // Particles are loaded, you can customize the container if needed
  };
  
  const shapeTypes = ["circle", "triangle", "polygon", "star"]; 


  const options = {
    "autoPlay": true,
    "fullScreen": {
      "enable": false,
      "zIndex": 0
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onDiv": {
          "elementId": "repulse-div",
          "enable": true,
          "mode": "connect"
        },
        "onHover": {
          "enable": true,
          "mode": ["repulse", "bubble"],
          "parallax": {
            "enable": true,
            "force": 60,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.8,
          "size": 10,
          "speed": 3
        },
        "connect": {
          "distance": 80,
          "lineLinked": {
            "opacity": 0.5
          },
          "radius": 60
        },
        "grab": {
          "distance": 400,
          "lineLinked": {
            "opacity": 1
          }
        },
        "push": {
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 100,
          "duration": 100
        }
      },
      "detectsOn": "window"
    },
    "particles": {
      "color": {
        "value": "#FFFF00"
      },
      "lineLinked": {
        "blink": false,
        "color": "#FFFFCC",
        "consent": false,
        "distance": 300,
        "enable": true,
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "attract": {
          "enable": false,
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "bounce": true,
        "direction": "none",
        "enable": true,
        "outMode": "out",
        "random": true,
        "speed": 2,
        "straight": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 650
        },
        "limit": 500,
        "value": 20
      },
      "opacity": {
        "animation": {
          "enable": false,
          "minimumValue": 0.1,
          "speed": 1,
          "sync": false
        },
        "random": false,
        "value": 0.5
      },
      "shape": {
        "type": shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      },
      "size": {
        "animation": {
          "enable": false,
          "minimumValue": 0.1,
          "speed": 40,
          "sync": false
        },
        "random": true,
        "value": 5
      }
    },
    "polygon": {
      "draw": {
        "enable": false,
        "lineColor": "#ffffff",
        "lineWidth": 0.5
      },
      "move": {
        "radius": 10
      },
      "scale": 1,
      "type": "none",
      "url": ""
    },
    "background": {
      "color": "#000080",
      "opacity": "1",
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    }
  };  
  // @ts-ignore
  const particlesBackground = (
    <Particles options={options} init={particlesInit} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
  );

  return (
    <div>

<div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <CS10Info />
      <div>
      {particlesBackground}
      </div>

    
    </div>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, #F0F8FF, #CAE9F5 )' }}>
    <AnnouncementsContainer />

    </div>
    </div>
  );
}
