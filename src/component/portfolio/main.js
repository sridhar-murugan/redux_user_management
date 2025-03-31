// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import { Menu, X } from "lucide-react";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex">
//       {/* <button
//         className="p-2 m-2 bg-gray-800 text-white rounded-md md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button> */}
//       <aside
//         className={`bg-gray-900 text-white w-64 h-screen p-5 fixed md:static transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out`}
//       >
//         <h1>SRIDHAR M</h1>
//          <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' width="150px"  alt="Signup Illustration" style={{ borderRadius: 50 }}/>
//         <nav>
//           <ul className="space-y-4">
//             <li><Link to="/" className="block hover:text-gray-400">Home</Link></li>
//             <li><Link to="/about" className="block hover:text-gray-400">About</Link></li>
//             <li><Link to="/resume" className="block hover:text-gray-400">Resume</Link></li>
//             <li><Link to="/projects" className="block hover:text-gray-400">Projects</Link></li>
//             <li><Link to="/skills" className="block hover:text-gray-400">Skills</Link></li>
//             <li><Link to="/contact" className="block hover:text-gray-400">Contact</Link></li>
//           </ul>
//         </nav>
//       </aside>
//       <div className="flex-1 p-5">
//         <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"; 
// // import Typed from "react-typed";
// import { ReactTyped } from "react-typed";
// // import { useNavigate } from 'react-router-dom';

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true); // Ensure Sidebar is visible by default
// //   const navigate = useNavigate();
//   return (
//     <div className="d-flex">
//       <aside
//         className={`bg-dark text-white p-4 position-fixed vh-100 ${isOpen ? "d-block" : "d-none"} `}
//         style={{ width: "250px" }}
//       >
        
//         <img 
//           src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
//           width="150px"
//           alt="Signup Illustration"
//           className="rounded-circle d-block mx-auto mb-3"
//         />
//         <h1 className="h4 text-white text-center mb-3">SRIDHAR M</h1>
//         {/* <p className="h4 text-white text-start mb-3">FrontEndDeveloper</p> */}
//         {/* <nav>
//           <ul className="list-unstyled text-center">
//             <li><Link to="/Home" className="text-white d-block py-2 text-decoration-none" >Home</Link></li>
//             <li><Link to="/about" className="text-white d-block py-2 text-decoration-none">About</Link></li>
//             <li><Link to="/resume" className="text-white d-block py-2 text-decoration-none">Resume</Link></li>
//             <li><Link to="/projects" className="text-white d-block py-2 text-decoration-none">Projects</Link></li>
//             <li><Link to="/skills" className="text-white d-block py-2 text-decoration-none">Skills</Link></li>
//             <li><Link to="/Contact" className="text-white d-block py-2 text-decoration-none">Contact</Link></li>
//           </ul>
//         </nav> */}


// <nav>
//       <ul className="list-unstyled text-center">
//         <li>
//           <Link to="/Home" className="text-white d-block py-2 text-decoration-none">
//             <FaHome className="me-2" /> Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-white d-block py-2 text-decoration-none">
//             <FaUser className="me-2" /> About
//           </Link>
//         </li>
//         <li>
//           <Link to="/resume" className="text-white d-block py-2 text-decoration-none">
//             <FaFileAlt className="me-2" /> Resume
//           </Link>
//         </li>
//         <li>
//           <Link to="/projects" className="text-white d-block py-2 text-decoration-none">
//             <FaProjectDiagram className="me-2" /> Projects
//           </Link>
//         </li>
//         <li>
//           <Link to="/skills" className="text-white d-block py-2 text-decoration-none">
//             <FaTools className="me-2" /> Skills
//           </Link>
//         </li>
//         <li>
//           <Link to="/Contact" className="text-white d-block py-2 text-decoration-none">
//             <FaEnvelope className="me-2" /> Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//       </aside>
//       <div className="flex-grow-1" style={{ marginLeft: "250px", width: "100%" }}>
//         <img
//           src="https://media.istockphoto.com/id/1176664047/vector/futuristic-microchip-processor-with-lights-on-the-blue-background-quantum-computer-large.jpg?s=612x612&w=0&k=20&c=oc3Ownc2t18KL-ROI16vRBtqjRsu3mXf6bXWgs-b9xE="
//           className="img-fluid"
//           alt="Background"
//           style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
//         />
//         <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
//   <h1 
//     className="fw-bold" 
//     style={{ fontSize: "48px",paddingRight:" 200px", textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}
//   >
//     Sridhar M
//   </h1>

//   {/* <h2 
//     className="fw-light" 
//     style={{
//       fontSize: "28px",
//       paddingRight:" 200px",
//       color: "#fff",
//       textShadow: "3px 3px 0px #444, 6px 6px 0px rgba(0,0,0,0.6)"
//     }}
//   >
//     Front-End Developer
//   </h2> */}


// <h2 style={{
//       fontSize: "28px",
//       color: "#fff",
//       textShadow: "3px 3px 0px #444, 6px 6px 0px rgba(0,0,0,0.6)"
//     }}>
//       <ReactTyped 
//         strings={["Front-End Developer (React.js)", "JavaScript Developer", "Web Developer"]} 
//         typeSpeed={80} 
//         backSpeed={50} 
//         loop 
//       />
//     </h2>
  
// </div>

       
//       </div>
      
//     </div>
//   );
// }





// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
// import { ReactTyped } from "react-typed";

// export default function Navbar() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand fw-bold text-white" to="/">
//             Sridhar M
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/Home">
//                   <FaHome className="me-2" /> Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/about">
//                   <FaUser className="me-2" /> About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/resume">
//                   <FaFileAlt className="me-2" /> Resume
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/projects">
//                   <FaProjectDiagram className="me-2" /> Projects
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/skills">
//                   <FaTools className="me-2" /> Skills
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white" to="/contact">
//                   <FaEnvelope className="me-2" /> Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="d-flex align-items-center justify-content-center text-center text-white vh-100" style={{ background: "url(https://media.istockphoto.com/id/1176664047/vector/futuristic-microchip-processor-with-lights-on-the-blue-background-quantum-computer-large.jpg?s=612x612&w=0&k=20&c=oc3Ownc2t18KL-ROI16vRBtqjRsu3mXf6bXWgs-b9xE=) center/cover no-repeat" }}>
//         <div>
//           <h1 className="fw-bold" style={{ fontSize: "48px", textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>Sridhar M</h1>
//           <h2 style={{ fontSize: "28px", color: "#fff", textShadow: "3px 3px 0px #444, 6px 6px 0px rgba(0,0,0,0.6)" }}>
//             <ReactTyped 
//               strings={["Front-End Developer (React.js)", "JavaScript Developer", "Web Developer"]} 
//               typeSpeed={80} 
//               backSpeed={50} 
//               loop 
//             />
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// const About = () => {
//   return (
//     <div className="container mt-4">
//         <h1>About</h1>
//         <img 
//           src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
//           width="200px"
//           alt="Signup Illustration"
//           className="rounded-circle d-block mx-auto mb-3"
//           style={{ border: "5px solid black" }} 
//         />
//         <p>Hello, I’m <strong>Sridhar!</strong></p>

// <p>
//   I have completed my <strong>Master of Computer Applications (MCA)</strong> and I’m a passionate <strong>Front-End Developer </strong>specializing in React.js. 
//   As a fresher, I have been actively learning and building web applications using <strong>HTML, CSS, JavaScript, React.js, Redux, Bootstrap, and REST APIs</strong>.
// </p>

// <p><strong>Tech Skills:</strong></p>
// <p>React.js, JavaScript, Redux, HTML, CSS, Bootstrap, REST API, Git, GitHub.</p>

//       <div className="row">
//         {/* First Column */}
//         <div className="col-md-6">
//           <p>
//             <span className="fw-bold">Name: </span>Sridhar
//           </p>
         
//           <p>
//             <span className="fw-bold">DOB: </span>24
//           </p>
//           <p>
//             <span className="fw-bold">Age: </span>22
//           </p>
//           <p>
//             <span className="fw-bold">City: </span>Villupuram
//           </p>
//         </div>

//         {/* Second Column */}
//         <div className="col-md-6">
//           <p>
//             <span className="fw-bold">College: </span>Mailam Engineering College
//           </p>
//           <p>
//             <span className="fw-bold">Degree: </span>MCA
//           </p>
//           <p>
//             <span className="fw-bold">Mail: </span>
//             <a href="mailto:sridharmurugan99@gmail.com" className="text-decoration-none">
//               sridharmurugan99@gmail.com
//             </a>
//           </p>
//           <p>
//             <span className="fw-bold">Phone: </span>
//             <a href="tel:+919524727121" className="text-decoration-none">
//               +91 95247 27121
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




// import React from "react";

// const Skills = () => {
//   return (
//     <div className="container mt-3">
//       <h1 style={{ fontFamily: "Arial, Serif", fontSize: "28px", fontWeight: "bold", color: "#333", padding: "15px" }}>
//         Skills
//       </h1>
//       <div className="row mt-2 justify-content-center">
        
        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="80px" alt="JavaScript" />
//             </div>
//             <h5 className="mt-2">JavaScript</h5>
//           </div>
//         </div>

       
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png" width="80px" alt="React.js" />
//             </div>
//             <h5 className="mt-2">React.js</h5>
//           </div>
//         </div>

        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-128.png" width="80px" alt="CSS3" />
//             </div>
//             <h5 className="mt-2">CSS3</h5>
//           </div>
//         </div>

        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png" width="80px" alt="HTML5" />
//             </div>
//             <h5 className="mt-2">HTML5</h5>
//           </div>
//         </div>

        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="80px" alt="Bootstrap" />
//             </div>
//             <h5 className="mt-2">Bootstrap</h5>
//           </div>
//         </div>

        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-128.png" width="80px" alt="SASS" />
//             </div>
//             <h5 className="mt-2">SASS</h5>
//           </div>
//         </div>

        
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-128.png" width="80px" alt="Git" />
//             </div>
//             <h5 className="mt-2">Git</h5>
//           </div>
//         </div>

       
//         <div className="col-md-3 col-sm-6 mb-3">
//           <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
//               <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-1024.png" width="80px" alt="GitHub" />
//             </div>
//             <h5 className="mt-2">GitHub</h5>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Skills;


// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//         <h1 style={{ fontFamily: "Arial, Serif", fontSize: "28px", fontWeight: "bold", color: "#333", padding: "15px" }}>
//   Contact
// </h1>
//     <div className="container d-flex justify-content-left mt-5">
        
//       <div className="card col-md-3 p-4 shadow">
//         <div className="mb-3">
//           <h3>📍 Address:</h3>
//           <p>4/1276, Main Road, Chinthamani.</p>
//         </div>
//         <div className="mb-3">
//           <h3>📞 Call:</h3>
   

//           <a href="tel:+919524727120" className="text-decoration-none">
//             +91 95247 27121
//           </a>
//         </div>
//         <div>
//           <h3>📧 Email:</h3>
//           <a href="mailto:yours-email@example.com" className="text-decoration-none">
//             sridharmurugan99@gmail.com
            
//           </a>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import Project from "./project"; 
import Resume from "./resume"; 

export default function Portfolio() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold text-white">Portfolio</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("home")}>
                  <FaHome className="me-2" /> Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("about")}>
                  <FaUser className="me-2" /> About
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("skills")}>
                  <FaTools className="me-2" /> Skills
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("projects")}>
                  <FaProjectDiagram className="me-2" /> Projects
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("resume")}>
                  <FaFileAlt className="me-2" /> Resume
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white btn btn-link" onClick={() => setActivePage("contact")}>
                  <FaEnvelope className="me-2" /> Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mt-5 pt-5">
        {activePage === "home" && (
          <div className="d-flex align-items-center justify-content-center text-center text-white vh-100" style={{ background: "url(https://media.istockphoto.com/id/1176664047/vector/futuristic-microchip-processor-with-lights-on-the-blue-background-quantum-computer-large.jpg?s=612x612&w=0&k=20&c=oc3Ownc2t18KL-ROI16vRBtqjRsu3mXf6bXWgs-b9xE=) center/cover no-repeat" }}>
            <div>
              <h1 className="fw-bold" style={{ fontSize: "48px", textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>Sridhar M</h1>
              <h2 style={{ fontSize: "28px", color: "#fff", textShadow: "3px 3px 0px #444, 6px 6px 0px rgba(0,0,0,0.6)" }}>
                <ReactTyped 
                  strings={["Front-End Developer (React.js)", "JavaScript Developer", "Web Developer"]} 
                  typeSpeed={80} 
                  backSpeed={50} 
                  loop 
                />
              </h2>
            </div>
          </div>
        )}
        {activePage === "about" && <About />}
        {activePage === "skills" && <Skills />}
        {activePage === "projects" && <Project />}
        {activePage === "resume" && <Resume />}
        {activePage === "contact" && <Contact />}
      </div>
    </div>
  );
}
