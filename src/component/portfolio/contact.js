import React from "react";

const Project = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h2 className="fw-bold text-center mb-3" style={{ color: "#333" }}>
              React Redux Authentication System
            </h2>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Built a <strong>Login & Signup system</strong> using <strong>React.js</strong> and <strong>Redux</strong> for efficient state management. This project ensures a secure and scalable authentication process by handling user sessions, form validation, and API interactions with Redux actions and reducers.
            </p>
            <p style={{ fontSize: "16px", color: "#555" }}>
              It includes features like <strong>user registration, login authentication, error handling</strong>, and <strong>persistent state management</strong> for a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
