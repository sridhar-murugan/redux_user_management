// import React, { useState } from "react";
// const Login = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const handlelogin = () => {
//     const storedemail = localStorage.getItem("email");
//     const storedpassword = localStorage.getItem("password");
//     if (email === storedemail && password === storedpassword) {
//       alert("login successful");
//     } else {
//       alert("invalid email or password");
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card" style={{ alignContent: "center" }}>
//               <h2 className="text-center">Loin Page</h2>
//               <div className="p-3">
//                 <label for="email" className="form-label">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                   placeholder="Enter Your Email"
//                 ></input>
//               </div>
//               <div className="p-3">
//                 <label for="password" className="form-label">
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   value={password}
//                   onChange={(e) => setpassword(e.target.value)}
//                   placeholder="Enter Your Password"
//                 ></input>
//               </div>
//               <div className="p-3 d-grid">
//                 <button
//                   onClick={handlelogin}
//                   type="button"
//                   className="btn btn-primary btn-block"
//                 >
//                   LOGIN
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
// import React, { useState } from 'react';
// const Login = () => {
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const handlelogin = () => {
//     const storedemail = localStorage.getItem('email');
//     const storedpassword = localStorage.getItem('password');
//     if (email == storedemail && password == storedpassword) {
//       alert('login successful');
//     }
//     else {
//       alert('invalid email or password');
//     }
//   }
//   return (
//     <div className='container vh-100 d-flex justify-content-center align-items-center'>
//       <div className='row'>
//         {/* <div className='card'> */}
//           <div className='col-md-6'>
//             <div className='' style={{ alignContent: 'center' }}>

//               <h2 className='text-center'>Loin Page</h2>
//               <div className='p-3'>
//                 <label for="email" className='form-label'>Email:</label>
//                 <input type='email' className='form-control custom-rounded' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter Your Email'style={{borderRadius:20}}></input>
//               </div>
//               <div className='p-3'>
//                 <label for="password" className='form-label'>Password:</label>
//                 <input type='password' className='form-control custom-rounded' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Your Password'style={{borderRadius:20}}></input>
//               </div>
//               <div className='p-3 d-grid'>
//                 <button onClick={handlelogin} type='button' className='btn btn-primary btn-block custom-rounded'style={{borderRadius:20}}>LOGIN</button>

//               </div>


//             </div>
//           </div>
//           <div className='col-md-6'>
//             <div className=''>
//               <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo='width="300px">
//               </img>

//             </div>
//           </div>

//         </div>
//       </div>

//     // </div>
//   )
// }
// export default Login;
