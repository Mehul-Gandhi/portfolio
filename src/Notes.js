import React, { useState } from 'react';
import { CenterFocusStrong, Email } from '@mui/icons-material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import QueueIcon from '@mui/icons-material/Queue';
import "./App.css";

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
            <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
                <a href="https://forms.gle/pUYpbNhdcAF7aGZw9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
                <FeedIcon sx={{ fontSize: 36, marginRight: 4 }} className="email-icon" />
                    Anonymous Feedback Form</a>
            </div>
            <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
                <a href="https://cs10.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
                <LinkIcon sx={{ fontSize: 36, marginRight: 4 }} className="email-icon" />
                    CS10 Website</a>
            </div>
            <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
                <a href="https://oh.cs10.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
                <QueueIcon sx={{ fontSize: 36, marginRight: 4 }} className="email-icon" />
                    Office Hour Queue</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  const WeekHeader = ({ currentWeek }) => {

  
    const week = weeksData[currentWeek];
    return (
      <div style={{color: "blue"}}>
        <h2 className="section-heading text-uppercase spaced" >
          Week {currentWeek + 1} Announcements
        </h2>
        <h4>{week.date}</h4>
        <img src={"alonzo.svg"} alt="Alonzo Mascot" />
      </div>
    );
  };
  
  const weeksData = [

    {date: "August 21, 2023", content: [{heading: "Welcome to CS10!", subheading: [
        "Sign up for a section",
        "<strong>Note:</strong> Make sure to complete the <a href='https://forms.gle/aEQtobR9xhgjzHFL6'>registration form</a>."
      ]}, {heading: "Lab at Soda Hall Wozniak Lounge Room 430-438", subheading: ["Victoria's Lab is on Mondays and Wednesdays 3-5pm", "Mehul's Lab is on Mondays and Wednesdays 8-10pm"]}]},
    // {date: "August 26, 2023", content: [{heading: "Welcome to Week 2!", subheading: ["Sign up for a section on Edstem!"]}, {heading: "Hello world"}]},
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
  
const labInfo = [
    //[Lab Name, Lab Link, Lab Slides Link, ["Resource 1", ..., "Resource N"]]
    ["Lab 1: Welcome to Snap", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/intro_pair/1-introduction.topic&course=&novideo&noreading&noassignment",
     "https://docs.google.com/presentation/d/11gyuil24Yc4BpEUGlnd7iU4A6HFMQixRvbH4_s8PsRQ/edit",
    [{name: "Snap! Reference Manual", content: "https://snap.berkeley.edu/snap/help/SnapManual.pdf"}, {name: "Snap! Explained by Scratch", content: "https://en.scratch-wiki.info/wiki/Snap!_(programming_language)"}, {name: "Snap! Backstory", content: "https://www.miosoft.com/blog/snap-programming-for-everyone.html"}]],
    ["Lab 2: Build Your Own Blocks", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/intro_pair/2-loops-variables.topic&course=&novideo&noreading&noassignment", 
"https://docs.google.com/presentation/u/1/d/1gITpV1ih_BEIyykone5wrDAu_BnzMbiBhQqKe604o30/edit?usp=drive_web&ouid=101261523977890586883",
[{name: "Snap Tips and Tricks!", content: "https://docs.google.com/document/d/1PcnJHRVdttYCBnfEgfEOadMEI6SBcM18U44xNpr0wK0/edit"}]]

];

const LabTable = ({ labInfo }) => {
    return (
      <div className="container" >
        <h2 className="section-heading text-uppercase spaced" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'blue'}}>Lab Information</h2>
        <h4  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'blue'}}>Slides created by Mehul Gandhi</h4>
        <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <table className="table" >
          <thead>
            <tr>
              <th>Lab</th>
              <th>Lab Slides</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {labInfo.map((lab, index) => (
              <tr key={index}>
                <td><a href={lab[1]}>{lab[0]}</a></td>
                <td><a href={lab[2]} target="_blank" rel="noopener noreferrer">Lab {index + 1} Slides</a></td>
                <td>
                {lab[3].map((resource, resourceIndex) => (
                    <div>
                  <a key={resourceIndex} href={resource.content} target="_blank" rel="noopener noreferrer">{resource.name}</a>
                  <br />
                  </div>
                ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  };

  const ResourceBox = ({ title, items }) => {
    const boxStyle = {
      background: 'linear-gradient(to bottom, #0D47A1, #1976D2)',
      borderRadius: '50px',
      width: '100%',
      padding: '30px',
      marginBottom: '20px',
      margin: '0 10px',
      color: '#FFFFFF',
    };
  
    const listStyle = {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    return (
      <div style={boxStyle}>
        <h2 className="d-flex justify-content-center align-items-center">{title}</h2>
        <ul style={listStyle} className="d-flex align-items-center mb-3 email-link">
          {items.map((item, index) => (
            <li key={index} >
              <a href={item.content} target="_blank" rel="noopener noreferrer" className="email-link"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} 
              >
              {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const Resources = () => {
    const items = [
      {
        title: 'Debugging Guide',
        items: [
            {name: "Debugging Snap!", content: "https://docs.google.com/document/d/16gaxemuImuABVoe8C_lrmEd3EKz53QtWHe2OwkHMcBE/edit?usp=sharing"},
            {name: "Yolanda's Snap! Debugging Walkthrough (June 2020)", content: "https://www.youtube.com/watch?v=nAgsZ_fVcw0&t=6s"},
            {name: "Mehul's Python Debugging Guide", content: "https://docs.google.com/document/d/1LouAC_i04MAUUjAchyNpR5ZmJWXgB0KcJ8zATZ9oq1M/edit?usp=sharing"},
          { name: 'PythonTutor', content: 'https://pythontutor.com/python-debugger.html#mode=edit' },
        ],
      },
      {
        title: 'Exam Prep',
        items: [
          { name: "Spring 2020 Quest Exam Walkthrough", content: "https://youtu.be/v38P5quvoMc"},
          { name: "Mehul's Fractal Review Video (Spring 2023)", content: 'https://youtu.be/ioOvJ9S268s' },
          { name: "Mehul's Fractal Review Slides (Spring 2023)", content: "https://docs.google.com/presentation/d/10TgeE-YHSQOW5JmK9qf9BBfD83pj9zDcuZ8SnGyR7P4/edit?usp=sharing"},
          { name: "Mehul's Summer 2022 Final Exam Walkthrough", content: 'https://youtu.be/rS2Av0stp5w?list=PLVjI1AKNyfVOnDpcdm4Mf53ARt2u85YuW' },
          // Add more items as needed
        ],
      },
      {
        title: 'Miscellaneous',
        items: [
          { name: "Snap! Forum", content: "https://forum.snap.berkeley.edu/"},
          { name: 'Useful Snap! Blocks', content: 'https://docs.google.com/document/d/16j-3p_mMLS6DB3lUr2_wSYOhUOP-WencXrFnzZRpHyo/edit' },
          // Add more items as needed
        ],
      },
    ];
  
    const particlesInit = async (engine) => {
      // Initialize the tsParticles instance (engine) here, adding custom shapes or presets
      await loadFull(engine);
    };
  
    const particlesLoaded = async (container) => {
      // Particles are loaded, you can customize the container if needed
    };

    return (
      <div className="d-flex container justify-content-center align-items-start" style={{ margin: '10px' }}>

        {items.map((item, index) => (
          <ResourceBox key={index} title={item.title} items={item.items} />
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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: 'linear-gradient(to bottom, #BCD2E8, #91BAD6 )' }}>

    <LabTable labInfo={labInfo} />
    </div>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: 'linear-gradient(to bottom, #BCD2E8, #91BAD6 )' }}>
    <Resources />
    <div>
      
        </div>
</div>
    </div>
  );
}