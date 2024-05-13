import React from 'react';
import "./App.css"

const ExperienceEntry = ( { role, company, time, skills, description } ) => {
    return (
          <div className="mt-3 container-fluid">
            <div className="row">
              <div className="col-9">
                <h5>
                  {role}, <em>{company}</em> {skills && <i> | {skills}</i>}
                </h5>
              </div>
              <div className="text-right col-3">{time}</div>
              <div className="col-lg-10">
                <ul>
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      );
};

const Classes = () => {
    var classes = [
        { code: "CS61A", title: "Structure and Interpretation of Computer Programs", link: "https://cs61a.org/", time: "Summer 2021",
         description: "An introduction to programming and computer science focused on abstraction techniques as means to manage program complexity. Techniques include procedural abstraction; control abstraction using recursion, higher-order functions, generators, and streams; data abstraction using interfaces, objects, classes, and generic operators; and language abstraction using interpreters and macros. The course exposes students to programming paradigms, including functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic analysis of algorithms. There are several significant programming projects.", 
         skills: "Python, Scheme, SQL, Regex" },
        {code: "CS61B", title: "Data Structures and Programming Methodology", link: "https://inst.eecs.berkeley.edu/~cs61b/fa21/", time: "Fall 2021", 
        description: " Fundamental dynamic data structures, including linear lists, queues, trees, and other linked structures; arrays strings, and hash tables. Storage management. Elementary principles of software engineering. Abstract data types. Algorithms for sorting and searching. Introduction to the Java programming language.",
         skills: "Java, Algorithms"},
        {code: "MATH 54", title: "Linear Algebra and Differential Equations", link: "https://lin-lin.github.io/MATH54/", time: "Fall 2021", 
        description: "Basic linear algebra; matrix arithmetic and determinants. Vector spaces; inner product spaces. Eigenvalues and eigenvectors; linear transformations, symmetric matrices. Linear ordinary differential equations (ODE); systems of linear ODE.  Fourier series. (F,SP)",
         skills: ""},
        {code: "CS70", title: "Discrete Mathematics and Probability Theory", link: "https://www.sp22.eecs70.org/", time: "Spring 2022", 
        description: "Logic, infinity, and induction; applications include undecidability and stable marriage problem. Modular arithmetic and GCDs; applications include primality testing and cryptography. Polynomials; examples include error correcting codes and interpolation. Probability including sample spaces, independence, random variables, law of large numbers; examples include load balancing, existence arguments, Bayesian inference."
        , skills: ""},
        {code:"EECS16A", title:"Designing Information Devices and Systems I", link:"https://eecs16a.org/", time:"Spring 2022", 
        description: "This course sequence provides a comprehensive foundation for core EECS topics in signal processing, learning, control, and circuit design while introducing key linear-algebraic concepts motivated by application contexts. Modeling is emphasized in a way that deepens mathematical maturity, and in both labs and homework, students will engage computationally, physically, and visually with the concepts being introduced in addition to traditional paper/pencil exercises. ", 
        skills: "Python"},
        {code:"DATA8", title:"Foundations of Data Science", link:"https://www.data8.org/sp22/", time:"Spring 2022", 
        description: "Foundations of data science from three perspectives: inferential thinking, computational thinking, and real-world relevance. Given data arising from some real-world phenomenon, how does one analyze that data so as to understand that phenomenon? The course teaches critical concepts and skills in computer programming and statistical inference, in conjunction with hands-on analysis of real-world datasets, including economic data, document collections, geographical data, and social networks. It delves into social and legal issues surrounding data analysis, including issues of privacy and data ownership.", 
        skills: "Python, Statistics"},
        {code: "CS61C", title:"Great Ideas of Computer Architecture (Machine Structures)", link: "https://inst.eecs.berkeley.edu/~cs61c/su22/", 
        time:"Summer 2022",
         description: "The internal organization and operation of digital computers. Machine architecture, support for high-level languages (logic, arithmetic, instruction sequencing) and operating systems (I/O, interrupts, memory management, process switching). Elements of computer logic design. Tradeoffs involved in fundamental architectural design decisions.",
          skills: "C, RISC-V, OpenMP, Logism"},
        {code: "CS161", title:"Computer Security", link:"https://fa22.cs161.org/", time:"Fall 2022", 
        description: "Introduction to computer security. Cryptography, including encryption, authentication, hash functions, cryptographic protocols, and applications. Operating system security, access control. Network security, firewalls, viruses, and worms. Software security, defensive programming, and language-based security. Case studies from real-world systems.",
         skills: "C, Assembly Language, Golang, SQL"},
        {code: "CS198", title:"Introduction to Full-Stack Development", link:"https://fullstackdecal.com/", time:"Fall 2022", 
        description: "In this course we cover the basics of web development. This includes everything from the fundamental frameworks that ground web development, the inner workings of the Internet itself, and many of the frameworks, technologies, and best practices that are used in the industry today. In the spirit of full-stack development, we cover the three main pillars of modern web development: backend development, frontend development, and design.",
         skills: "Figma, HTML, CSS, JavaScript, React"},
        {code: "DATA 100", title: "Principles and Techniques of Data Science", link: "https://ds100.org/fa22/", time: "Fall 2022", 
        description: "In this course, students will explore the data science lifecycle, including question formulation, data collection and cleaning, exploratory data analysis and visualization, statistical inference and prediction​, and decision-making.​ This class will focus on quantitative critical thinking​ and key principles and techniques needed to carry out this cycle. These include languages for transforming, querying and analyzing data; algorithms for machine learning methods including regression, classification and clustering; principles behind creating informative data visualizations; statistical concepts of measurement error and prediction; and techniques for scalable data processing.", 
        skills: "Python, Pandas, SQL, Data Visualization"},
        {code: "CS170", title: "Efficient Algorithms and Intractable Problems", link: "https://cs170.org/", time: "Spring 2023", 
        description: "Concept and basic techniques in the design and analysis of algorithms; models of computation; lower bounds; algorithms for optimum search trees, balanced trees and UNION-FIND algorithms; numerical and algebraic algorithms; combinatorial algorithms. Turing machines, how to count steps, deterministic and nondeterministic Turing machines, NP-completeness. Unsolvable and intractable problems.", 
        skills: "Algorithms, Python"},
        {code: "CS186", title: "Introduction to Database Systems", link: "https://cs186berkeley.net/", time:"Spring 2023",
         description: " Access methods and file systems to facilitate data access. Hierarchical, network, relational, and object-oriented data models. Query languages for models. Embedding query languages in programming languages. Database services including protection, integrity control, and alternative views of data. High-level interfaces including application generators, browsers, and report writers. Introduction to transaction processing. Database system implementation to be done as term project.", 
         skills: "Java, Databases, SQL, MongoDB"},
        {code: "CS160", title: "User Interface Design and Development", link: "https://kwsong.github.io/cs160su23", time: "Summer 2023",
         description: "The design, implementation, and evaluation of user interfaces. User-centered design and task analysis. Conceptual models and interface metaphors. Usability inspection and evaluation methods. Analysis of user study data. Input methods (keyboard, pointing, touch, tangible) and input models. Visual design principles. Interface prototyping and implementation methodologies and tools. Students will develop a user interface for a specific task and target user group in teams.", 
         skills: "Figma, HTML, CSS, JavaScript, React"},
        {code: "CS188", title: "Introduction to Artificial Intelligence", link: "https://inst.eecs.berkeley.edu/~cs188/fa23", time: "Fall 2023", 
        description: "Ideas and techniques underlying the design of intelligent computer systems. Topics include search, game playing, knowledge representation, inference, planning, reasoning under uncertainty, machine learning, robotics, perception, and language understanding.", 
        skills: "Python"},
        {code: "DATA104", title: "Human Contexts and Ethics of Data", link: "https://data.berkeley.edu/data-104-human-contexts-and-ethics-data", time: "Fall 2023", 
        description: "This course teaches you to use the tools of applied historical thinking and Science, Technology, and Society (STS) to recognize, analyze, and shape the human contexts and ethics of data. It addresses key topics such as doing ethical data science amid shifting definitions of human subjects, consent, and privacy; the changing relationship between data, democracy, and law; the role of data analytics in how corporations and governments provide public goods such as health and security to citizens; sensors, machine learning and artificial intelligence and changing landscapes of labor, industry, and city life.  It prepares you to engage as a knowledgeable and responsible citizen and professional in the varied arenas of our datafied world.",
         skills: ""},
        {code: "DATA140", title: "Probability for Data Science", link: "http://prob140.org/", time: "Fall 2023", 
        description: "An introduction to probability, emphasizing the combined use of mathematics and programming to solve problems. Random variables, discrete and continuous families of distributions. Bounds and approximations. Dependence, conditioning, Bayes methods. Convergence, Markov chains. Least squares prediction. Random permutations, symmetry, order statistics. Use of numerical computation, graphics, simulation, and computer algebra.", 
        skills: "Python"}
    ];
    classes = [...classes].reverse();

    return (
        <div className="mt-3 container-fluid">
          {classes.map((item, index) => (
            <div key={index} className="row">
              <div className="col-9">
                <h5>
                  {item.code}, ‎ 
                  <em>
                    <a href={item.link ? item.link: ""}
                  target="_blank" rel="noopener noreferrer" 
                  style={{ textDecoration: 'none'}}>
                     {item.title}</a>
                    </em>
                  {item.skills && <i> | {item.skills} </i>}
                </h5>
              </div>
              <div className="text-right col-3">{item.time}</div>
              <div className="col-lg-10">
                <ul>
                  {item.description && <li>{item.description}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    
    
    
    
    

const Resume = () => {
  return (
    <div className="resume-container">
    <div className="my-5 pb-5 mr-xs-3 container">
        <div className="row">
            <div className="col-12">
                <h3>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" 
                    className="svg-inline--fa fa-graduation-cap fa-w-20 resume-icon"
                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z">
                            </path>
                            </svg>
                            Education</h3>
                            </div>
            <hr />
            <div className="col-12">
                <p className="lead mb-0">
                    University of California Berkeley, Expected Graduation: December 2024</p>
                    <p>B.A. Double Major in <em>
                        Computer Science &amp; Data Science</em>,
                         GPA: 3.49/4</p></div></div>
                         <div className="mb-4"><div className="row"> {/* <-- hr --> */}
            <div className="col-12"><h3>
                <svg aria-hidden="true" 
                focusable="false" data-prefix="fas"
                    data-icon="briefcase"
                    className="svg-inline--fa fa-briefcase fa-w-16 resume-icon" 
                    role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z">
                        </path>
                        </svg>
                        Experience</h3>
                        </div>
                        <hr />
                        <ExperienceEntry role="Software Engineer Intern" company={<a href="https://relyestate.com/" target="_blank" rel="noopener noreferrer" 
                  style={{ textDecoration: 'none'}}>
                    Rely</a>}
                     time="January 2024 - April 2024"
                         description={
                          ["Created the landing page using React, Bootstrap, and MaterialUI, which is used by 1000+ renters and landlords to sign up on the waiting list",
                          "Designed the waiting list using AWS S3 and Lambda for users to receive email notifications"
                          ]
                      } 
                         skills="Python, React, AWS"
                         />
                        <ExperienceEntry role="Software Developer" company={<a href="https://pioneers.berkeley.edu/" target="_blank" rel="noopener noreferrer" 
                  style={{ textDecoration: 'none'}}>
                    Pioneers in Engineering</a>}
                     time="January 2023 - Present"
                         description={["Develop field control software in a team of 8 used for a robotics competition between 15+ high schools",
                        "Maintain UI elements for the scoreboard and allow communication between robots and sensors on the game field",
                        "Create Flask web applications that use the WebSocket protocol for real-time bi-directional communication",
                        "Utilize the Google Sheets API to fetch and push data from Google Sheets, including critical match information"]} 
                         skills="HTML, CSS, JavaScript, Python, Flask"
                         />
                      <ExperienceEntry role="Undergraduate Researcher" company="UC Berkeley EECS Department" time="August 2023 - December 2023"
                         description={["Research combinatorial and computational game theory for Berkeley's GamesCrafters group with Dr. Dan Garcia",
                        "Collaborate with a team of 5+ to redesign the website and create visualizations for computational games",
                        "Develop autonomous opponents in abstract strategy games with a focus on balancing memory usage and time"]} 
                         skills="Python, C, HTML, CSS, JavaScript"
                         />
                         <ExperienceEntry role="CS10 Head Teaching Assistant" company={<a href="https://cs10.org/su23"
                          target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none'}}>
                        UC Berkeley EECS Department </a>}  time="June 2023 - December 2023"
                         description={["Collaborated with team members to create comprehensive unit tests and to ensure autograder functionality for Python assignments, resulting in an 80% reduction in grading time",
                        "Revised lab assignment specifications to enhance clarity and improve student performance of a class with 250+ undergraduate students, resulting in a 75% increase in average assignment scores and higher student satisfaction"]} 
                         skills="HTML, CSS, JavaScript, Python, Snap!"
                         />
                         <ExperienceEntry role="Activities Director" company={<a href="https://ieee.berkeley.edu/"
                          target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none'}}>
                        IEEE Institute of Electrical and Electronics Engineering @
                        UC Berkeley </a>} 
                        time="January 2022 - May 2023"
                         description={["Manage and mentor a team of 4 to plan biweekly social events for the IEEE and EECS community of 150+ members, host collaborative events with other engineering clubs, and advertise events on social media"]}
                         />

                        </div>
                        <div className="mb-4">
                            {/* hr */}
<div className="row">
    <div className="col-12">
        <h3><br/>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tools" className="svg-inline--fa fa-tools fa-w-16 resume-icon" role="img" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z">
                    </path></svg>Skills</h3></div>
                    <hr /><div className="mt-3 col">

                        <p className="mb-0"><b>Programming</b>: Python, Java, C, JavaScript, Go</p>
                        <p className="mb-0"><b>Web</b>: Flask, React, HTML, CSS, MongoDB, Express, Node.js, SQL</p>
                        <p className="mb-0"><b>Data science</b>:  NumPy, Pandas, Jupyter</p>
                        <p className="mb-0"><b>Tools</b>: git, bash, npm, yarn, VSCode, Heroku</p></div>
                        </div>
                        <div className="row">
    <div className="col-12">
        <h3><br/>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" className="svg-inline--fa fa-book-open fa-w-18 resume-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M360 0H32A32 32 0 0 0 0 32v416a32 32 0 0 0 32 32h328a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zM72 160v-48a16 16 0 0 1 16-16h240a16 16 0 0 1 16 16v48zm240 272H72V256h240zm0-112H72v-48h240z"></path>
            </svg>Classes</h3></div>
                    <hr />
                        <Classes />
                         </div></div>
                        </div></div></div>);
};

export default Resume;
