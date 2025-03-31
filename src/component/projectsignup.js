
// // import React, { useState } from "react";
// // const Signup =()=>{
// //     const [email, setemail] = useState("");
// //     const [password, setpassword] = useState("");
// //     const handlesignup =()=>{
// //         localStorage.setItem("email",email);
// //         localStorage.setItem("password",password);
// //         alert("sign up sucessfull");
// //     }
// //     return(
// //         <div>
// //              <div className="container">
// //         <div className="row">
// //           <div className="col-md-6">
// //             <div className="card" style={{ alignContent: "center" }}>
// //               <h2 className="text-center">Sign Page</h2>
// //               <div className="p-3">
// //                 <label for="email" className="form-label">
// //                   Email:
// //                 </label>
// //                 <input
// //                   type="email"
// //                   className="form-control"
// //                   value={email}
// //                   onChange={(e) => setemail(e.target.value)}
// //                   placeholder="Enter Your Email"
// //                 ></input>
// //               </div>
// //               <div className="p-3">
// //                 <label for="password" className="form-label">
// //                   Password:
// //                 </label>
// //                 <input
// //                   type="password"
// //                   className="form-control"
// //                   value={password}
// //                   onChange={(e) => setpassword(e.target.value)}
// //                   placeholder="Enter Your Password"
// //                 ></input>
// //               </div>
// //               <div className="p-3 d-grid">
// //                 <button
// //                   onClick={handlesignup}
// //                   type="button"
// //                   className="btn btn-primary btn-block"
// //                 >
// //                   LOGIN
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //         </div>
// //     )
// // }
// // export default Signup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// const Sign = () => {
//     const [email, setmail] = useState('')
//     const [password, setpassword] = useState('')
//     const navigate = useNavigate();

//     const [responseMessage, setResponseMessage] = useState("");

//     // Handle form submission
//     const handlesign = async (e) => {
//         try {
//             const response = await axios.post("http://localhost:8000/api/senddata", {
//               email: "sample@example.com",
//               password: "12345",
//             });
//             console.log("Response from server:", response.data);
//           } catch (error) {
//             console.error("Error:", error.response ? error.response.data : error.message);
//           }
//     };

 
//     return (
//         <div className='container  vh-100 d-flex justify-content-center align-items-center'>
//             <div className='row'>
//                 <div className='col-md-6'>
//                     {/* <div className='card'> */}

//                     <h2 className='text-center'> Sign Up</h2>
//                     <div className='p-3'>
//                         <label for="email" className='form-label'>Email:</label>
//                         <input type="email" className='form-control custom-rounded' value={email} onChange={(e) => setmail(e.target.value)} placeholder='Enter Your Email' style={{ borderRadius: 20 }}></input>
//                     </div>
//                     <div className='p-3'>
//                         <label for="password" className='form-label'>Password:</label>
//                         <input type="password" className='form-control custom-rounded' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Your Password' style={{ borderRadius: 20 }}></input>
//                     </div>
//                     <div className='p-3 text-center d-grid'>
//                         <button onClick={handlesign} type='button' className='btn btn-primary btn-block ' style={{ borderRadius: 20 }}>SIGNUP</button>
//                     </div>
//                     {/* </div> */}

//                 </div>
//                 <div className='col-md-6'>
//                     {/* <div className='card'> */}
//                         <img src='https://cdni.iconscout.com/illustration/premium/thumb/account-sign-up-illustration-download-in-svg-png-gif-file-formats--login-user-form-online-registration-app-register-or-pack-interface-illustrations-3723262.png'width="400">
//                         </img>

//                     {/* </div> */}
//                 </div>

//             </div>
//         </div>


//     )
// }
// export default Sign;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Sign = () => {
//   const [email, setmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const navigate = useNavigate();

//   const handlesign = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/senddata", {
//         email,
//         password,
//       });
//       console.log("Response from server:", response.data);
//       setResponseMessage(response.data.message);
//       navigate("/success"); // Redirect to success page (optional)
//     } catch (error) {
//       console.error("Error:", error.response ? error.response.data : error.message);
//       setResponseMessage("Failed to sign up.");
//     }
//   };

//   return (
//     <div className="container vh-100 d-flex justify-content-center align-items-center">
//       <div className="row">
//         <div className="col-md-6">
//           <h2 className="text-center">Sign Up</h2>
//           <form onSubmit={handlesign}>
//             <div className="p-3">
//               <label htmlFor="email" className="form-label">Email:</label>
//               <input
//                 type="email"
//                 className="form-control custom-rounded"
//                 value={email}
//                 onChange={(e) => setmail(e.target.value)}
//                 placeholder="Enter Your Email"
//                 style={{ borderRadius: 20 }}
//                 required
//               />
//             </div>
//             <div className="p-3">
//               <label htmlFor="password" className="form-label">Password:</label>
//               <input
//                 type="password"
//                 className="form-control custom-rounded"
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//                 placeholder="Enter Your Password"
//                 style={{ borderRadius: 20 }}
//                 required
//               />
//             </div>
//             <div className="p-3 text-center d-grid">
//               <button type="submit" className="btn btn-primary btn-block" style={{ borderRadius: 20 }}>SIGNUP</button>
//             </div>
//           </form>
//           {responseMessage && <p className="text-center mt-3">{responseMessage}</p>}
//         </div>
//         <div className="col-md-6">
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/account-sign-up-illustration-download-in-svg-png-gif-file-formats--login-user-form-online-registration-app-register-or-pack-interface-illustrations-3723262.png"
//             width="400"
//             alt="Sign Up Illustration"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handlesign = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/senddata", {
        email,
        password,
      });
      console.log("Response from server:", response.data);
      setResponseMessage(response.data.message); // Display success message
      navigate("/success"); // Redirect to success page (optional)
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setResponseMessage(
        error.response?.data?.message || "Failed to sign up. Please try again."
      ); // Display error message
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={handlesign}>
            <div className="p-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control custom-rounded"
                value={email}
                onChange={(e) => setmail(e.target.value)}
                placeholder="Enter Your Email"
                style={{ borderRadius: 20 }}
                required
              />
            </div>
            <div className="p-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control custom-rounded"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter Your Password"
                style={{ borderRadius: 20 }}
                required
              />
            </div>
            <div className="p-3 text-center d-grid">
              <button type="submit" className="btn btn-primary btn-block" style={{ borderRadius: 20 }}>SIGNUP</button>
            </div>
          </form>
          {responseMessage && <p className="text-center mt-3">{responseMessage}</p>}
        </div>
        <div className="col-md-6">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/account-sign-up-illustration-download-in-svg-png-gif-file-formats--login-user-form-online-registration-app-register-or-pack-interface-illustrations-3723262.png"
            width="400"
            alt="Sign Up Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Sign;








