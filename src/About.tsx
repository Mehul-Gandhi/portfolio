import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Email, LocationOn, GitHub, LinkedIn } from '@mui/icons-material'; 
import "./App.css";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const Contact = () => {
  return (
    <div className="d-flex container justify-content-center align-items-center round" style={{ background: 'linear-gradient(to bottom, grey, #a67c00)', borderRadius: '50px', width: '100%', marginTop: "50px", marginBottom: "50px"}}>
      <div className="container-fluid p-5" style={{ color: 'white' }}>
        <h2 style={{color: "#FFD700"}}>Contact Me</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name (Example: John Smith)" style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px', width: "150%" }} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email (Example: john@example.com)" style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px', width: "150%" }} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows={4} placeholder="Type your message..." style={{ borderRadius: '10px', borderColor: 'darkblue', fontSize: '18px', padding: '10px', width: "150%" }} defaultValue=""></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Send</button>
        </form>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
      <div className="d-flex align-items-center mb-3 email-link" style={{ fontSize: '18px' }}>
          <a href="mailto:gandhi@berkeley.edu" 
          target="_blank" rel="noopener noreferrer" 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link">
            <Email sx={{ fontSize: 36, marginRight: 8 }} className="email-icon" />
            gandhi@berkeley.edu
          </a>
        </div>
        <div className="d-flex align-items-center mb-3" style={{  fontSize: '18px' }}>
          <a href="https://www.google.com/maps/place/Berkeley,+CA/@37.8712241,-122.3426374,13z/data=!3m1!4b1!4m6!3m5!1s0x808579363a8549d3:0x94ea1595a675e993!8m2!3d37.8715226!4d-122.273042!16zL20vMDFqcjY?entry=ttu"
          target="_blank" rel="noopener noreferrer"  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '18px' }} className="email-link"
          >
          <LocationOn sx={{ fontSize: 36, marginRight: 8 }} className="email-icon"/>
          Berkeley, California
          </a>
        </div>
        <div className="d-flex justify-content-center">
        <a href="https://github.com/Mehul-Gandhi" target="_blank" rel="noopener noreferrer" 
        className="mx-1 email-link" 
        style={{  textDecoration: 'none', fontSize: '24px' }}>
    <GitHub sx={{ fontSize: 60 }} className="email-icon"/>
  </a>
          <a href="https://www.linkedin.com/in/mehul-gandhi/" target="_blank" rel="noopener noreferrer" className="mx-1 email-link" style={{  textDecoration: 'none', fontSize: '24px' }} >
            <LinkedIn sx={{ fontSize: 60 }} className="email-icon"/> 
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

  const particlesInit = async (engine: any) => {
    // Initialize the tsParticles instance (engine) here, adding custom shapes or presets
    await loadFull(engine);
  };
  const particlesLoaded = async (container: any) => {
    // Particles are loaded, you can customize the container if needed
  };
  const options = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };
  // @ts-ignore
  const x =       <Particles options={options} init={particlesInit} />



  return (
    <div className="container mt-4 p-5 round" style={{ background: 'linear-gradient(to bottom, grey, #000080)', borderRadius: '50px'}}>
          {x}

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
    
    </div>
  );
};

export default About;
