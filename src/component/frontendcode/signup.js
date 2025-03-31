import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("http://localhost:8000/Ecommerce", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     alert("Sign Up Successful!");
    //     console.log("Form submitted:", formData);
    //   } else {
    //     alert(data.message || "Signup failed");
    //   }
    // } catch (error) {
    //   console.error("Signup error:", error);
    //   alert("Something went wrong. Please try again.");
    // }
    try {
      const response = await axios.post("http://localhost:8000/Ecommerce", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Sign Up Successful!");
        console.log("Form submitted:", formData);
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (error) {
      // console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "40px auto", padding: "50px", border: "1px solid #ddd", borderRadius: "5px" }}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "3px" }} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "3px" }} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "3px" }} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "3px" }} />
      </div>
      <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "3px", fontSize: "16px" }}>
        Sign Up
      </button>
    </form>
  );
}

export default Signup;