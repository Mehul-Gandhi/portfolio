import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Email, LocationOn, GitHub, LinkedIn } from '@mui/icons-material'; 


const Contact = () => {
  return (
    <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, grey, darkgrey)', borderRadius: '50px', width: '100%', marginTop: "50px", marginBottom: "50px"}}>
      <div className="container-fluid p-5" style={{ color: 'white' }}>
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name (Example: John Smith)" style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px' }} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email (Example: john@example.com)" style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px' }} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows={4} placeholder="Type your message..." style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px' }} defaultValue=""></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send</button>
        </form>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
        <div className="d-flex align-items-center mb-3">
          <a href="mailto:gandhi@berkeley.edu" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <Email sx={{ fontSize: 24, marginRight: 8 }} style={{ color: 'white' }}/>
            gandhi@berkeley.edu
          </a>
        </div>
        <div className="d-flex align-items-center mb-3" style={{ color: 'white', fontSize: '18px' }}>
          <LocationOn sx={{ fontSize: 24, marginRight: 8 }} />
          Berkeley, California
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="mx-1" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
            <GitHub sx={{ fontSize: 32 }} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="mx-1" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
            <LinkedIn sx={{ fontSize: 32 }} />
          </a>
        </div>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <img
          src="code-solid.png"
          alt="Tech Image"
          style={{ maxWidth: '75%', height: 'auto' }}
        />
      </div>
    </div>
  );
};





const AboutMe = () => {
  return (
    <div className="container mt-4 p-5 round" style={{ background: 'linear-gradient(to bottom, grey, #000080)', borderRadius: '50px' }}>
      <div className="container-fluid py-5" style={{ color: 'white' }}>
        <div className="row">
          <div className="col-md-8">
            <p className="fs-5">
              My name is Mehul Gandhi! I was born and raised in Hayward, California. I'm currently a rising senior at UC Berkeley majoring in Computer Science and Data Science.
              I am currently on course staff for ‎ 
              <span style={{ color: 'yellow' }}>
                <a href="https://cs10.org" style={{ textDecoration: 'none', color: 'yellow' }}>
                    CS10: The Beauty and Joy of Computing 
                </a>
              </span> where I introduce students to Snap! and Python
              and teach concepts such as tree recursion, algorithmic complexity, and concurrency.
            </p>
            <p className="fs-5">
              I am also involved with ‎ 
              <span style={{ color: 'yellow' }}>
                <a href="https://pioneers.berkeley.edu/" style={{ textDecoration: 'none', color: 'yellow' }}>
                Pioneers in Engineering
                </a>
              </span>
               , a robotics club that aims to introduce a STEM education to high school students
              in the Bay Area, where I am the frontend developer.
            </p>
            <p className="fs-5"> 
              In addition to my interests in teaching and robotics, I am interested in artificial intelligence and fullstack development!
            </p>
            <p className="fs-5">
              If you find yourself interested in artificial intelligence or education, and want to grab coffee and chat, feel free to reach out!
            </p>
            <div className="d-flex">
              <a href="/resume" className="btn mx-1 btn-primary btn-lg" type="button">Resume</a>
              <a href="mailto:gandhi@berkeley.edu?subject" className="btn mx-1 btn-light btn-lg" type="button">Contact</a>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-start">
            <div className="border round" style={{ borderColor: 'white', maxWidth: '50%', maxHeight: '50%', borderRadius: "50px" }}>
              <img src="/headshot.jpeg" alt="Your headshot" className="img-fluid " style={{ maxWidth: '125%', maxHeight: '125%', borderRadius: "50px" }}/>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

const About = () => {
  return (<div>

    <AboutMe />
    <Contact />
  </div>)
}

export default About;