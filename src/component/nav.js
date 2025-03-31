// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./nav.css";

// const Navbor =()=>{
//   const navigate = useNavigate();
//     return(
//         <div>
//               <nav className="navbar bg-secondary">
//         <div className="logo S-28"></div>
//         <ul className="nav-links S-15">
//           <li>
//             {/* <a href="#features">admin</a> */}
//             <button  onClick={() => navigate("/admin")}>Admin</button>
//           </li>
         
//         </ul>
//         <div className="nav-buttons">
//           <button className="login-btn BB-15" onClick={() => navigate("/login")}>Login</button>
//           <button className="register-btn B-15"  onClick={() => navigate("/sign")}>sign up</button>
         
//         </div>
//       </nav>
//       <h1 className="text-center text-">material & product</h1>

//         </div>
//     )

// }
// export default Navbor;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Navbor = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-secondary">
        <div className="logo S-28">Logo</div>

        {/* Navigation Links */}
        <ul className="nav-links S-15">
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <button>Products</button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate("/products/cement")}>Cement</li>
                <li onClick={() => navigate("/products/tiles")}>Tiles</li>
                <li onClick={() => navigate("/products/pipes")}>Pipes</li>
                <li onClick={() => navigate("/products/steel")}>Steel</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="nav-buttons">
          <button className="login-btn BB-15" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="register-btn B-15" onClick={() => navigate("/sign")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Page Title */}
      <h1 className="text-center">Material & Product</h1>
    </div>
  );
};

export default Navbor;


