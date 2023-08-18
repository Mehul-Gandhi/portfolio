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
    const projects = [
        {name: "InterView InSight", class: "", description: "A live interview feedback dashboard to enhance students' interview skills powered by ChatGPT", 
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
     links: [{name: "Request Access", content: "mailto:gandhi@berkeley.edu"}, {name: "Project spec", content: "https://fa22.cs161.org/proj2/"}],
     date: "December 2022"},
     {name: "Balance", class: "UC Berkeley CalHacks 9.0", description: "Created a web application in a team of 4, where users upload grocery shopping receipts to earn cryptocurrency coins based\
      on how well their hauls meet nutritional recommendations", details: ["Created a web application in a team of 4, where users upload grocery shopping receipts to earn cryptocurrency coins based on how well their hauls meet nutritional recommendations.",
      "Utilized Tesseract, an Optical Character Recognition API, to convert a grocery receipt into machine-readable text",
      "Designed an algorithm to award users cryptocurrency coins using a food training dataset to classify foods into one of the six food categories and utilized Web3.js and the Solana API to create, sign, and send transactions to the network"]
    , skills: ["HTML", "CSS", "JavaScript", "React", "Jupyter", "Bootstrap"], links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/Balance"}],
        date: "October 2022", images: ["/balance/balance.jpg"]},
        {name: "CourseCraft AI", class: "CS160: User Interface Design and Development", description: "A dynamic tool designed to automate the tedious process of course calendar generation for Computer Science and Data Science courses at UC Berkeley.",
        details: ["Collaborated with a team of 4 to develop an AI-powered course calendar generator for the UC Berkeley Computer Science Department using the MERN stack, resulting in savings of over 250+ staff hours on logistical calendar setup each semester",
        "Leveraged Chat GPT API to dynamically generate updated HTML schedules, encompassing refined deadlines, agenda, and dates by web scraping from previous semester's course websites",
        "Initiated the project with a design phase using Figma, translating conceptual ideas into tangible mockups and interface sketches. Engaged potential users for feedback, iterating on design prototypes to achieve optimal user experience and functionality alignment",
        "Engaged in a series of in-depth interviews with instructors of CS classes, deriving insights to pinpoint and address prevalent pain points in academic logistical setups"],
        skills: ["Python", "HTML", "CSS", "JavaScript", "React", "ChatGPT API", "MongoDB", "Flask", "Express"],
        links: [{name: "GitHub", content: "https://github.com/Mehul-Gandhi/CourseCraft"}, {name: "Video", content: "https://lnkd.in/gmvS7vwx"}, {name: "Report", content: "https://docs.google.com/document/d/1LNIGYvpZCwR3Cktpjuz_uaFkQW1erYXX81wF6_rRDh4/edit?usp=sharing"}],
        images: ["/coursecraft/calendar.png", "/coursecraft/compare.png", "/coursecraft/home.png", "/coursecraft/home2.png", "/coursecraft/share.png"]}
    ];

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
        <div className="projects-container">
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