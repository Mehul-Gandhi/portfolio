import React, { useState } from 'react';
import { CenterFocusStrong, Email } from '@mui/icons-material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Button from '@mui/material/Button';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import QueueIcon from '@mui/icons-material/Queue';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "./App.css";

function CS10Info() {
    return (
      <header className="masthead">
       <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, grey, #000080)', borderRadius: '20px', width: '100%', padding: '30px', border: '2px solid yellow' }}>
  <div className="container-fluid p-5" style={{ color: 'white', textAlign: 'center' }}>
    <h2 className="d-flex align-items-center justify-content-center" style={{ color: '#FFD700', marginBottom: '20px' }}>CS10 Fall 2023 Notes and Resources</h2>
    <p className="" style={{ color: '#FFD700', fontSize: '24px' }}><strong>Lab</strong>: Mondays and Wednesdays 8pm - 10pm <br />(Soda Hall Room 430-438, Wozniak Lounge)</p>
    
    <div className="row">
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="mailto:gandhi@berkeley.edu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <Email sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          gandhi@berkeley.edu
        </a>
      </div>
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="https://forms.gle/pUYpbNhdcAF7aGZw9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <FeedIcon sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          Anonymous Feedback Form
        </a>
      </div>
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="https://cs10.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <LinkIcon sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          CS10 Website
        </a>
      </div>
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="https://docs.google.com/document/d/1YqugyHgcEWXuCc0BtbX6dzx3ZXixK86SkgJq2dxx9oY/edit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <LiveHelpIcon sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          Lab FAQ
        </a>
      </div>
      
    </div>
    
    <div className="row">
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="https://oh.cs10.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <QueueIcon sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          Office Hour Queue
        </a>
      </div>
      <div className="col-md-3 mb-3 email-link" style={{ fontSize: '18px', justifyContent: 'center' }}>
        <a href="https://drive.google.com/drive/folders/1ZHJiGxUUWJ3IuBAamokUPElINW2qsc7w?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }} className="email-link">
          <FolderSharedIcon sx={{ fontSize: 36, marginBottom: 4 }} className="email-icon" />
          Mehul's Slides
        </a>
      </div>
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
[{name: "Snap Tips and Tricks!", content: "https://docs.google.com/document/d/1PcnJHRVdttYCBnfEgfEOadMEI6SBcM18U44xNpr0wK0/edit"},
{name: "Grow a Virtual Flower Field Video", content: "https://youtu.be/VcPc4VVDp2c"}]
], ["Lab 3: Conditionals, Reporters, and Abstraction", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/intro_pair/2-conditionals-testing-su21.topic&course=cs10_fa21.html&novideo&noreading&noassignment",
"https://docs.google.com/presentation/d/1ypGhgjeqjGkhnLNGHrQMS8OMsE6knKRSUyPWiaQ6Lgw/edit?usp=sharing", [
  {name: "Snap! Reference Manual", content: "https://snap.berkeley.edu/snap/help/SnapManual.pdf"}, {name: "Spring 2020 Quest Exam Questions 3-8", content: "https://drive.google.com/file/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view"},
   {name: "Spring 2020 Quest Exam Solutions", content: "https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view"}

]

], ["Lab 4: Lists & HOFs", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/lists/lists-I.topic&course=&novideo&noreading&noassignment",
"https://docs.google.com/presentation/d/1ShcSFWgLKo_tNancSnqx-aUwOC895zUlH0YhYcR_ruE/edit", [
  {name: "Yolanda's For Loop Guide", content: "https://docs.google.com/document/u/1/d/e/2PACX-1vQYoK-JYX_voUwliAbcn1oyvvgZSurn2C1E72Y8Qf9HeFTr2fFBbgPxpnYTMaR0Rkn82F8-Fq7QxzK6/pub"},
  {name: "Enhanced Map, Keep, and Combine", content: "https://forum.snap.berkeley.edu/t/enhanced-map-keep-find-first/1057"}
]

], ["Lab 5: Algorithms", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/areas/algorithms.topic&course=&novideo&noreading&noassignment", 
"https://docs.google.com/presentation/d/1-nlpD1RljPTEPWFDVrUDp6OYb26MUF4JRp4NOtxGQTY/edit#slide=id.g2556a360d4e_0_0",
[{name: "Search Algorithms and Efficiency", content: "https://youtu.be/XgAqlz_yl9s"},
  {name: "Binary Search in 4 Minutes", content: "https://youtu.be/fDKIpRe8GW4"}, 
  {name: "Linear Search vs Binary Search", content: "https://herovired.com/learning-hub/blogs/linear-search-vs-binary-search/"},
{name: "Binary Search is Logarithmic", content: "http://myithelpcentral.blogspot.com/2015/09/o-logn-notation-explanation-for-binary.html"}]

], ["Lab 6: Algorithmic Complexity", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/areas/algorithm-complexity.topic&course=&novideo&noreading&noassignment", "https://docs.google.com/presentation/d/1-nlpD1RljPTEPWFDVrUDp6OYb26MUF4JRp4NOtxGQTY/edit#slide=id.g2556a360d4e_0_0", [
  {name: "Proof of Gaussian Sum 1 to N", content: "https://youtu.be/iubZ_AH5N00"}, {name: "Gauss Sum 1 to 100", content: "https://youtu.be/jUz0jJm73aQ"}, {name: "Gauss Arithmetic Sequences", content: "https://mathbitsnotebook.com/Algebra2/Sequences/SSGauss.html"},
]], ["Lab 7. Testing + Proj 3", "https://cs10.org/bjc-r/cur/programming/2048-testing/intro_to_proj3.html?topic=berkeley_bjc%2F2048-testing%2F2048.topic&course&novideo&noreading&noassignment", "https://docs.google.com/presentation/d/1cSTH_zu5N2toeviR6QNWqDuWP_AMvZlXaxOE2yphwZU/edit?usp=sharing",
[{name: "Merge up Algorithm", content: "https://steven.codes/blog/cs10/2048-merge/"}, {name: "Play 2048", content: "https://play2048.co/"}]],
["Lab 8: Boards", "https://cs10.org/bjc-r/llab/html/topic.html?topic=berkeley_bjc%2Flists%2Ftic-tac-toe.topic&course&novideo&noreading&noassignment",
 "https://docs.google.com/presentation/d/1GcjHuTQhwgstTHuBL7IFWgMuyAlMbE_xt9yNFFnBbFs/edit#slide=id.g255f4f1f178_0_0",
[{name: "TicTacToe in Snap", content: "https://forum.snap.berkeley.edu/t/tic-tac-toe/1272"}]],
["Lab 9: Trees and Fractals", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/recur/recursion-trees-fractals.topic&course=&novideo&noreading&noassignment", 
"https://docs.google.com/presentation/d/1RJ61d7xOv9qG_Zxw1xSHXXnZ7PQDK7jpCilEgbiEZP8/edit?usp=sharing",
[{name: "Mehul's Fractal Review Video", content: "https://youtu.be/ioOvJ9S268s"}, {name: "Mehul's Fractal Review Slides", content: "https://docs.google.com/presentation/d/10TgeE-YHSQOW5JmK9qf9BBfD83pj9zDcuZ8SnGyR7P4/edit?usp=sharing"}, {name: "Cool Fractals Showcase", content: "https://snap.berkeley.edu/collection?username=snapcloud&collection=Fractals"}
, {name: "Recursion and Fractals Lab Guide", content: "https://docs.google.com/document/d/1x4O7CgRWaFwQrGGesbTD-U_dKph1lrMI-hosDJZm_QA/edit#heading=h.cq9u2m3lwu44"}]

], 
["Lab 10: Recursive Reporters", "https://cs10.org/bjc-r/llab/html/topic.html?topic=berkeley_bjc%2Frecur%2Frecursive-reporters-part1.topic&course&novideo&noreading&noassignment", "https://docs.google.com/presentation/d/1imtVgCf37Uph64xbhZS3VNhfQi3aEu-Eb_LGNoWKU4M/edit#slide=id.g255c8df5a82_1_515",
[{name: "MergeSort Neetcode", content: "https://youtu.be/MsYZSinhuFo"},
 {name: "Recursion and Fractals", content: "https://docs.google.com/document/d/1x4O7CgRWaFwQrGGesbTD-U_dKph1lrMI-hosDJZm_QA/edit#heading=h.cq9u2m3lwu44"}, 
 {name: "Vedansh's Tree Recursion Lecture Slides", content: "https://drive.google.com/file/d/1eYRjtxWxsrzV0yi58__UmVdREwgaBcFu/view"}]
],
["Lab 11: HOFs + Functions as Data",
 "https://cs10.org/bjc-r/llab/html/topic.html?topic=berkeley_bjc%2Fhofs%2Fhofs-practice.topic&course&novideo&noreading&noassignment", 
 "https://docs.google.com/presentation/d/1yTX6EqdAWqYTKSFIpylusM4ifQYVPj08CQFAqL7RtM0/edit#slide=id.g25759234bcb_0_165",
 [{name: "Pandigital Number", content: "https://en.wikipedia.org/wiki/Pandigital_number#:~:text=In%20mathematics%2C%20a%20pandigital%20number,pandigital%20number%20in%20base%2010."}, 
{name: "Snap Manual Page 26 (Pipe)", content: "https://snap.berkeley.edu/snap/help/SnapManual.pdf"} ]
],
["Lab 12: Welcome to Python", "https://cs10.org/bjc-r/llab/html/topic.html?topic=berkeley_bjc%2Fpython%2Fbesides-blocks-welcome-parsons.topic&course&novideo&noreading&noassignment"
, "https://docs.google.com/presentation/d/1DyULATDjQgBpYFuRArorWlDEcZFkjjRuCkFrVbwWdJc/edit#slide=id.g24c8f6131ef_0_91",
[{name: "For Loops", content: "https://www.w3schools.com/python/python_for_loops.asp"}, {name: "PythonTutor", content: "https://pythontutor.com/"}, {name: "Exponent in O(log n) time", content: "https://www.ideserve.co.in/learn/how-to-find-the-power-of-a-number"}]],
["Lab 13: Data Structures in Python", "https://cs10.org/bjc-r/topic/topic.html?topic=berkeley_bjc/python/besides-blocks-data-struct.topic&course=&novideo&noreading&noassignment", "https://docs.google.com/presentation/d/1SYFHdItKzYc9swbNsWfbjuxlm2NrIMVmeFkz0Y1SKtw/edit?usp=sharing",
[{name: "Dictionaries", content: "https://realpython.com/python-dicts/"}, {name: "List Comprehension", content: "https://realpython.com/list-comprehension-python/"}, {name: "Using 'break' in Python", content: "https://www.coursera.org/tutorials/python-break#:~:text=In%20Python%2C%20break%20allows%20you,execution%20of%20the%20innermost%20loop."}]]

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
          { name: "Mehul's Slides", content: "https://drive.google.com/drive/folders/1ZHJiGxUUWJ3IuBAamokUPElINW2qsc7w?usp=sharing"},
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

<div style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <CS10Info />
      <div>
      {particlesBackground}
      </div>

    
    </div>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, #F0F8FF, #CAE9F5 )' }}>
    <AnnouncementsContainer />

    </div>
    <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: 'linear-gradient(to bottom, #BCD2E8, #91BAD6 )', padding: '50px'}}>

    <LabTable labInfo={labInfo} />
    </div>
    <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', background: 'linear-gradient(to bottom, #BCD2E8, #91BAD6 )' }}>
    <Resources />
    <div>
      
        </div>
</div>
    </div>
  );
}
