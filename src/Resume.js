import React from 'react';

const Resume = () => {
  return (
    <div>
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
            <div className="col-12">
                <p className="lead mb-0">
                    University of California Berkeley, 2020</p>
                    <p>B.S. <em>Electrical Engineering 
                        &amp; Computer Science (EECS)</em>,
                         GPA: 3.84/4</p></div></div>
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
                                        <div className="mt-3 container-fluid">
                                            <div className="row">
                                                <div className="col-9">
                                                    <h5>Software Engineer,
                                                         <em>SpaceX</em></h5></div>
                        <div className="text-right col-3">Aug 2020 - Present</div>
                        <div className="col-lg-10"><li>Building software for Starlink User Terminal</li>
                        </div></div></div><div className="mt-3 container-fluid"><div className="row">
                            <div className="col-9"><h5>Data Engineer,
                                 <em>Berkeley Institute for Data Science</em></h5>
                                 </div><div className="text-right col-3">Aug - Dec 2019</div>
                                 <div className="col-lg-10">
                                    <li>Constructed full data pipeline for NLP analysis of cannabis dispensary products to identify trends and cultural elements affecting market competition</li>
                                    <li>Used unsupervised learning methods to extract data features (word2vec, bag-of-words, TFxIDF, LDA, PCA)</li>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="mt-3 container-fluid">
                                        <div className="row"><div className="col-9">
                                            <h5>Software Engineer Intern, <em>Quid Inc</em>
                                            </h5>
                                            </div><div className="text-right col-3">Jun - Aug 2019</div>
                                            <div className="col-lg-10"><li>Built production-level map interface for the Pro data platform using React, Redux, Node.js</li>
                                            <li>Helped clients like Walmart, Novartis and BCG breakdown voice-of-customer data by geographic region</li>
                                            <li>Developed word2vec model in PyTorch to help with company name (entity) disambiguation</li>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="mt-3 container-fluid">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <h5>Software Engineer Intern, 
                                                            <em>Lawrence Livermore National Laboratory</em>
                                                            </h5>
                                                            </div>
                                                            <div className="text-right col-3">May - Aug 2018</div>
                                                            <div className="col-lg-10">
                                                                <li>Developed Linux video acquisition software for the National Ignition Facility (NIF) using Java, JNI and C</li>
                                                                <li>Set up diskless Linux (RHEL 7) boot environment for over 500+ server machines</li>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                <div className="mt-3 container-fluid">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5>Reinforcement Learning Researcher, 
                                                <em>Berkeley Artificial Intelligence Research</em>
                                                </h5></div><div className="text-right col-3">Sep 2018 - Jun 2019</div>
                                                <div className="col-lg-10"><li>Developed an interface for crafting desirable policies in OpenAI gym environments via human interaction using behavioral cloning and deep reinforcement learning from human preferences</li>
                                                <li>Rahtz M., Fang J. et. al. “Towards an IDE for agent design.” LBI NeurIPS 2018.</li>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                <div className="mb-4">
                                                    {/* hr */}
<div className="row">
    <div className="col-12">
        <h3>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tools" className="svg-inline--fa fa-tools fa-w-16 resume-icon" role="img" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z">
                    </path></svg>Skills</h3></div><div className="mt-3 col">
                        <p className="mb-0"><b>Programming</b>: Python, Java, C, C#, JavaScript, Go</p>
                        <p className="mb-0"><b>Web</b>: Flask, React, Redux, Angular, MongoDB, Express, Node.js, Firebase, SQL</p>
                        <p className="mb-0"><b>Data science</b>: Tensorflow, sklearn, Pandas, Plotly/Dash, jupyter</p>
                        <p className="mb-0"><b>Tools</b>: git, bash, npm, yarn, VSCode, Linux management, Unity</p></div>
                        </div> </div>
                        </div></div></div>);
};

export default Resume;
