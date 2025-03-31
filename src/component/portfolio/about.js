import React from "react";

const About = () => {
  return (
    <div className="container mt-4">
        <h1>About</h1>
        <img 
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
          width="200px"
          alt="Signup Illustration"
          className="rounded-circle d-block mx-auto mb-3"
          style={{ border: "5px solid black" }} 
        />
        <p>Hello, I’m <strong>Sridhar!</strong></p>

<p>
  I have completed my <strong>Master of Computer Applications (MCA)</strong> and I’m a passionate <strong>Front-End Developer </strong>specializing in React.js. 
  As a fresher, I have been actively learning and building web applications using <strong>HTML, CSS, JavaScript, React.js, Redux, Bootstrap, and REST APIs</strong>.
</p>

<p><strong>Tech Skills:</strong></p>
<p>React.js, JavaScript, Redux, HTML, CSS, Bootstrap, REST API, Git, GitHub.</p>

      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <p>
            <span className="fw-bold">Name: </span>Sridhar
          </p>
         
          <p>
            <span className="fw-bold">DOB: </span>24
          </p>
          <p>
            <span className="fw-bold">Age: </span>22
          </p>
          <p>
            <span className="fw-bold">City: </span>Villupuram
          </p>
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <p>
            <span className="fw-bold">College: </span>Mailam Engineering College
          </p>
          <p>
            <span className="fw-bold">Degree: </span>MCA
          </p>
          <p>
            <span className="fw-bold">Mail: </span>
            <a href="mailto:sridharmurugan99@gmail.com" className="text-decoration-none">
              sridharmurugan99@gmail.com
            </a>
          </p>
          <p>
            <span className="fw-bold">Phone: </span>
            <a href="tel:+919524727121" className="text-decoration-none">
              +91 95247 27121
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
