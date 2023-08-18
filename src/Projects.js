import React, { useState } from "react";

const ProjectEntry = ({ title, images, description, links, skills, classTaken }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="mb-4 col-12 col-md-6 col-xl-4">
        <div className="card">
          <img width="100%" src={images[currentImageIndex]} alt={title} className="card-img-top" />
          <hr className="my-0" />
          <div className="card-body">
            <div className="card-title">
              <h4 className="text-center" style={{color: 'blue'}}>{title}</h4>
            </div>
            {classTaken && (
              <div>
                <p><strong>Class:</strong> {classTaken} </p>
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
                {links && links.map((item) => {
                    return (<a href={item.content} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-3 py-2 px-4">
                    {item.name}
                  </a>)
                })}
              
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

    //name: str, class: str description: str, details: list[str], skills: list[str],
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
     date: "December 2022"}
    ];

    return (
    <div>
      {projects.map((item) => {
        return (
          <ProjectEntry
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
  );
}