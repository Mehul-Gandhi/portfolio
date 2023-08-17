import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Contact = () => {
  return (
    <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, grey, darkgrey)', borderRadius: '50px', width: '100%', marginTop: "50px", marginBottom: "50px"}}>
      <div className="container-fluid p-5" style={{ color: 'white' }}>
        <h2>Contact Me</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name (Example: John Smith)" style={{ borderRadius: '10px', borderColor: 'darkblue' }} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email (Example: john@example.com)" style={{ borderRadius: '10px', borderColor: 'darkblue' }} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows={4} placeholder="Type your message..." style={{ borderRadius: '10px', borderColor: 'darkblue' }} defaultValue=""></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send</button>
        </form>
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
              <a href="mailto:your-email@example.com?subject" className="btn mx-1 btn-light btn-lg" type="button">Contact</a>
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
