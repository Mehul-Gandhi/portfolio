import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"
const ProjectEntry = ({ title, images, description, links, skills, classTaken }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
        <div className="project-card">
          <div className="card">
            <img src={images[currentImageIndex]} alt={title} className="card-img-top" />
            <hr className="my-0" />
            <div className="card-body">
              <div className="card-title">
                <h4 className="text-center" style={{ color: 'blue' }}>{title}</h4>
              </div>
              {classTaken && (
                <div>
                  <p><strong>{classTaken} </strong> </p>
                </div>
              )}
              <div>
                <p>{description}</p>
              </div>
              {skills && (
                <div>
                  <p><strong>Skills Used:</strong> {skills.join(", ")}</p>
                </div>
              )}
              <div className="text-center">
                {links && links.map((item) => (
                  <a key={item.name} href={item.content} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-3 py-2 px-4">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="text-center">
                <button onClick={prevImage} className="btn btn-secondary mx-1">&lt; Previous</button>
                <button onClick={nextImage} className="btn btn-secondary mx-1">Next &gt;</button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default function Projects() {

    //name: str, class: str, description: str, details: list[str], skills: list[str],
    // links: list[dict{name, content}], images: list[str], date
    const cs61a = "CS61A: Structure and Interpretation of Computer Programs";
    const cs61b = "CS61B: Data Structures and Programming Methodology"
    const mail = "mailto:gandhi@berkeley.edu"
    const projects = [
        {name: "InterView InSight", class: "UC Berkeley CalHacks + SkyDeck AI/LLM Hackathon ", description: "A live interview feedback dashboard to enhance students' interview skills powered by ChatGPT", 
        details: ["Collaborated with a team of 3 to create a live interview feedback dashboard, enhancing users' presentation and public speaking skills to enhance users' interview performance and boost confidence",
            "Leveraged the HumeAI API to analyze body language and vocal prosody and the OpenAI API to provide valuable feedback and responses to boost the users' communication skills"]
        , skills: ["React", "Next", "JavaScript", "ChatGPT API"],
    links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/interview-insight"}, {name: "Post", content: "https://www.linkedin.com/feed/update/urn:li:activity:7076790960923299840/"}], images: ["/interview/task.png", "/interview/teaching.jpg", "/interview/practice.jpg", "/interview/pitching.jpg"], date: "June 2023"},
    {name: "File Sharing System", class: "CS161: Computer Security",
     description: "An end-to-end encrypted file sharing system that supports authentication, saving/loading/overwriting/appending files, as well as sharing/revoking files from users. Utilizes public key encryption and digital signatures to create\
     file sharing invitations, symmetric/asymmetric encryption, and a random byte generator.", 
     details: ["Designed and programmed an end-to-end encrypted file sharing system written in Golang that supports user authentication, saving, loading, appending files to a server, and can share and revoke file access to users",
     "Utilized public key encryption and digital signatures to create file sharing invitations, symmetric encryption, asymmetric encryption, and a random byte generator to securely store files on a server"],
     skills: ["Golang", "Systems Design"],
     images: ["cs161/design1.png", "cs161/design2.png"],
     links: [{name: "Request Access", content: mail}, {name: "Project spec", content: "https://fa22.cs161.org/proj2/"}],
     date: "2022-12-01"},
     {name: "Balance", class: "UC Berkeley CalHacks 9.0", description: "Created a web application in a team of 4, where users upload grocery shopping receipts to earn cryptocurrency coins based\
      on how well their hauls meet nutritional recommendations", details: ["Created a web application in a team of 4, where users upload grocery shopping receipts to earn cryptocurrency coins based on how well their hauls meet nutritional recommendations.",
      "Utilized Tesseract, an Optical Character Recognition API, to convert a grocery receipt into machine-readable text",
      "Designed an algorithm to award users cryptocurrency coins using a food training dataset to classify foods into one of the six food categories and utilized Web3.js and the Solana API to create, sign, and send transactions to the network"]
    , skills: ["HTML", "CSS", "JavaScript", "React", "Jupyter", "Bootstrap"], links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/Balance"}],
        date: "2022-10-21", images: ["/balance/balance.jpg"]},
        {name: "CourseCraft AI", class: "CS160: User Interface Design and Development", description: "A dynamic tool designed to automate the tedious process of course calendar generation for Computer Science and Data Science courses at UC Berkeley.",
        date: "2023-08-12", details: ["Collaborated with a team of 4 to develop an AI-powered course calendar generator for the UC Berkeley Computer Science Department using the MERN stack, resulting in savings of over 250+ staff hours on logistical calendar setup each semester",
        "Leveraged Chat GPT API to dynamically generate updated HTML schedules, encompassing refined deadlines, agenda, and dates by web scraping from previous semester's course websites",
        "Initiated the project with a design phase using Figma, translating conceptual ideas into tangible mockups and interface sketches. Engaged potential users for feedback, iterating on design prototypes to achieve optimal user experience and functionality alignment",
        "Engaged in a series of in-depth interviews with instructors of CS classes, deriving insights to pinpoint and address prevalent pain points in academic logistical setups"],
        skills: ["Python", "HTML", "CSS", "JavaScript", "React", "ChatGPT API", "MongoDB", "Flask", "Express"],
        links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/CourseCraft"}, {name: "Video", content: "https://lnkd.in/gmvS7vwx"}, {name: "Report", content: "https://docs.google.com/document/d/1LNIGYvpZCwR3Cktpjuz_uaFkQW1erYXX81wF6_rRDh4/edit?usp=sharing"}],
        images: ["/coursecraft/calendar.png", "/coursecraft/compare.png", "/coursecraft/home.png", "/coursecraft/home2.png", "/coursecraft/share.png"]},
        {name: "Gitlet", class: cs61b, description: "A version control system in Java that mimics some of the basic features of Git such as add, commit, remote push, remote pull, merge, and checkout.", details: ["Built a version control system in Java that mimics some of the basic features of Git such as add, commit, remote push, remote pull, merge, and checkout.",
        "Utilized file management, serialization, and extensive error checking and handling with comprehensive unit tests and integration tests using JUnit library"], skills: ["Java", "Systems Design"],
    links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://inst.eecs.berkeley.edu/~cs61b/fa21/materials/proj/proj3/index.html"}],
    images: ["/gitlet/git.png", "/gitlet/process.png", "/gitlet/split.png"], date: "2021-12-06"}, 
    {name: "Enigma", class: cs61b, description: "Replicated the WWII German encryption machine 'Enigma' by building a generalized simulator that could handle numerous different descriptions of possible initial configurations of the machine and messages to encode or decode.",
details: ["Replicated the WWII German encryption machine 'Enigma' by building a generalized simulator that could handle numerous different descriptions of possible initial configurations of the machine and messages to encode or decode.", "Built in Java and worked mostly with Java's String, HashMap, ArrayList, and Scanner data structures to handle string manipulation, data mapping required, and file reading for encryption and decryption."],
skills: ["Java"], links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://inst.eecs.berkeley.edu/~cs61b/fa21/materials/proj/proj1/index.html"}], images: ["/enigma/machine.jpg", "/enigma/machine.png", "/enigma/permutation.png"], date: "2021-10-05"},
{name: "Scheme Interpreter", class: cs61a, description: "Developed an interpreter, written in Python, for a subset of the Scheme language, including the recursive evaluator.", details: ["Developed an interpreter, written in Python, for a subset of the Scheme language, including the recursive evaluator."],
skills: ["Python", "Scheme"], links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://cs61a.org/proj/scheme/"}],
images: ["/scheme/scheme.png", "/scheme/interpreter.png", "/scheme/map.png"], date: "2021-08-01"},
 {name: "Pokemon Discord Bot", class: "Side Project", description: "A Pokemon discord bot implemented in python. Contains pokemon minigames, a simple TCG, and anime commands. Uses asynchronous programming, the YouTube API, PyPokedex API, and PostgreSQL for database storage.", details: ["A Pokemon discord bot implemented in python. Contains pokemon minigames, a simple TCG, and anime commands. Uses PostgreSQL."],
skills: ["Python", "SQL"], links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/pokemon-discord-bot"}, {name: "Video", content: "https://youtu.be/FvExsGKHX1M"}], 
images: ["/discord/bag.png", "/discord/poker.png", "/discord/ttt.png"], date: "2022-03-28"},
{name: "Shepherd", class: "Pioneers in Engineering", description: "Shepherd is the team that is in charge of field control. Shepherd brings together all the data on the game field into one centralized location, where it keeps track of score, processes game-specific actions, keeps track of time, and informs the scoreboard. I created the alliance selection menu.",
details: [], skills: ["Python", "HTML", "CSS", "JavaScript", "Flask"], links: [{name: "GitHub", content: "https://github.com/pioneers/shepherd"}, {name: "Video", content: "https://youtu.be/htvO3EBsScM"}],
images: ["/shepherd/creator.png","/shepherd/scoreboard.png", "/shepherd/gui.png", "/shepherd/selection.png"], date: "2023-05-01"},
{name: "2048", class: "Side Project", description: "2048 is a single-player sliding block puzzle game designed by Italian web developer Gabriele Cirulli. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048. However, one can continue to play the game after reaching the goal, creating tiles with larger numbers. I implemented this in Python using Pygame", 
details: [], skills: ["Python"], links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/2048"}], images: ["2048/screenshot.png"], date: "2021-12-05"},
{name: "Jumping Cube Game", class: cs61b, description: "The KJumpingCube game1 is a two-person board game. It is a pure strategy game, involving no element of chance. I created an AI using the minimax algorithm and alpha-beta pruning for a human player to play against the computer. I also created a GUI for the game.",
details: [], skills: ["Java"], links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://inst.eecs.berkeley.edu/~cs61b/fa21/materials/proj/proj2/index.html"}, {name: "Play", content: "http://www.playonlinedicegames.com/jumpingcube"}],
images: ["/jump/alphabeta.png", "/jump/cascadeOverfull2.png"], date: "2021-11-04"}, 
{name: "Yelp Clone App", class: "Side Project", description: "Developed a Yelp-like website application using the MERN tech stack to enable users to explore and rate 1000+ restaurants in Malaysia, fostering an interactive environment", 
details: [], skills: ["React", "NextJS", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/sss"}], date: "2023-08-18", images: ["/yelp/map.png", "/yelp/list.png"]},
{name: "NumC", class:"CS61C: Great Ideas in Computer Architecture (Machine Structures)", description: "NumC is a Python library aimed at optimizing mathematical and matrix operations through a blend of SIMD instructions and parallel processing techniques like OpenMP.\
 NumC achieves a 55.5x speedup in matrix multiplication and a 1100x speedup in the matrix power operation.",
details: [], skills: ["C"], links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://inst.eecs.berkeley.edu/~cs61c/su22/projects/proj4/"}], date: "2022-08-01", images: ["numc/row_major.jpg", "/numc/download.png", "/numc/omp.jpg"]},
{name: "CS61CPU", class: "CS61C: Great Ideas in Computer Architecture (Machine Structures)", description: "The CS61CPU project is an intricate endeavor focused on enhancing a RISC-V CPU design with a 2-stage pipelining approach. The project delves into various\
 facets of CPU architecture, including instruction set expansion through the integration of new instructions. Through rigorous testing and simulation, the CS61CPU project aims to create a refined and functional CPU capable of effectively executing a diverse set of\
  instructions with notable performance gains attributed to pipelining.", details: [], skills: ["Logism", "RISC-V"], links: [{name: "Request Access", content: mail}, {name: "Project Spec", content: "https://inst.eecs.berkeley.edu/~cs61c/su21/projects/proj3/"}], date: "2022-07-25",
images: ["/cpu/proj3_pipeline.png", "/cpu/error_wire_2.png"]}
    ].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Sort in descending order
      });;

    const [selectedSkill, setSelectedSkill] = useState(""); // Step 1
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define isDropdownOpen
  
    const handleSkillClick = (skill) => {
      setSelectedSkill(skill);
      setIsDropdownOpen(false); // Close the dropdown when a skill is selected
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
    };


  
    // Step 2: Count skill frequency
    const skillCount = {};
    projects.forEach((project) => {
      project.skills.forEach((skill) => {
        if (skillCount[skill]) {
          skillCount[skill]++;
        } else {
          skillCount[skill] = 1;
        }
      });
    });
  
    // Sort skills by frequency in descending order
    const sortedSkills = Object.keys(skillCount).sort((a, b) => skillCount[b] - skillCount[a]);
  
    // Step 3: Create dropdown menu for additional skills
    const dropdownSkills = sortedSkills.slice(5);
  
    const filteredProjects = selectedSkill
      ? projects.filter((project) => project.skills.includes(selectedSkill))
      : projects;
  
      return (
        <div>
          <div className="skill-buttons text-center"> 
            <button onClick={() => handleSkillClick("")} className={`btn ${selectedSkill === "" ? "btn-primary" : "btn-secondary"}`}>
              All
            </button>
            {sortedSkills.slice(0, 5).map((skill) => ( 
              <button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                className={`btn ${selectedSkill === skill ? "btn-primary" : "btn-secondary"}`}
              >
                {skill}
              </button>
            ))}
            {dropdownSkills.length > 0 && (
        <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
          <button
            onClick={toggleDropdown}
            className="btn btn-secondary dropdown-toggle custom-button"
            type="button"
          >
            More Skills
          </button>
          <div
            className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
            style={{
                position: "absolute",
                top: "100%", // Position the dropdown below the button
                left: "50%", // Center the dropdown horizontally
                transform: "translateX(-50%)", // Adjust to center the content
                zIndex: 1, // Ensure it's above other content
            }}
          >
                  {dropdownSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className={`dropdown-item ${selectedSkill === skill ? "active" : ""}`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        <div className="projects-container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {filteredProjects.map((item) => {
            return (
              <ProjectEntry
                key={item.name}
                title={item.name}
                images={item.images}
                description={item.description}
                links={item.links}
                skills={item.skills}
                classTaken={item.class}
              />
            );
          })}
        </div>
      </div>
    );
  }