import React from "react";

const Resume = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#333" }}>My Resume</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-3">
            <img 
              src="https://via.placeholder.com/800x1000?text=Sample+Resume" 
              alt="Sample Resume" 
              className="img-fluid rounded border" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
