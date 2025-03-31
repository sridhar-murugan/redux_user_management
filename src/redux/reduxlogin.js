// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../redux/store';


// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email }));
//     // navigate('/dashboard');
//     // navigate('/Signup')
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }




// import React, { useState, useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/store';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//    const dispatch = useDispatch();
//    const navigate = useNavigate();

//    useEffect(() => {
//     setemail('');
//     setpassword('');
//   }, []);
//   // const handlelogin = () => {
//   //   const storedemail = localStorage.getItem('email');
//   //   const storedpassword = localStorage.getItem('password');
//   //   if (email == storedemail && password == storedpassword) {
//   //     alert('login successful');
//   //   }
//   //   else {
//   //     alert('invalid email or password');
//   //   }
//   // }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email }));
//     navigate('/dashboard');

//     setemail('');
//     setpassword('');
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//     <div className='container vh-100 d-flex justify-content-center align-items-center'>
//       <div className='row'>
       
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
//                 {/* <button onClick={handlelogin} type='button' className='btn btn-primary btn-block custom-rounded'style={{borderRadius:20}}>LOGIN</button> */}
//                 <button  type='submit' className='btn btn-primary btn-block custom-rounded'style={{borderRadius:20}}>LOGIN</button>
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
//       </form>

//     // </div>
//   )
// }
// export default Login;




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../redux/authenticationSlice';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     dispatch(login({ email, password }));

//     // Check authentication state
//     if (isAuthenticated) {
//       navigate('/Home');
//     }
//     //  else {
//     //   setError('Invalid email or password');
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='container vh-100 d-flex justify-content-center align-items-center'>
//         <div className='row'>
//           <div className='col-md-6'>
//             <div className='' style={{ alignContent: 'center' }}>
//               <h2 className='text-center'>Login Page</h2>
//               {error && <p className="text-danger text-center">{error}</p>}
//               <div className='p-3'>
//                 <label htmlFor="email" className='form-label'>Email:</label>
//                 <input
//                   type='email'
//                   className='form-control custom-rounded'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder='Enter Your Email'
//                   style={{ borderRadius: 20 }}
//                   required
//                 />
//               </div>
//               <div className='p-3'>
//                 <label htmlFor="password" className='form-label'>Password:</label>
//                 <input
//                   type='password'
//                   className='form-control custom-rounded'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder='Enter Your Password'
//                   style={{ borderRadius: 20 }}
//                   required
//                 />
//               </div>
//               <div className='p-3 d-grid'>
//                 <button type='submit' className='btn btn-primary btn-block custom-rounded' style={{ borderRadius: 20 }}>
//                   LOGIN
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' width="300px" alt="Login Illustration" />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../redux/authenticationSlice';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please enter email and password", { position: "top-right", autoClose: 3000 });
//       return;
//     }

//     dispatch(login({ email, password }));
//   };

//   // Watch for isAuthenticated changes and redirect when true
//   useEffect(() => {
//     if (isAuthenticated) {
//       toast.success("Login Successful!", { position: "top-right", autoClose: 2000 });
//       setTimeout(() => {
//         navigate("/Home");
//       }, 2000);
//     }
//   }, [isAuthenticated, navigate]); // Run effect when isAuthenticated changes

//   return (
//     <form onSubmit={handleSubmit}>
//       <ToastContainer />
//       <div className='container vh-100 d-flex justify-content-center align-items-center'>
//         <div className='row'>
//           <div className='col-md-6'>
//             <div className='' style={{ alignContent: 'center' }}>
//               <h2 className='text-center'>Login Page</h2>
//               <div className='p-3'>
//                 <label htmlFor="email" className='form-label'>Email:</label>
//                 <input
//                   type='email'
//                   className='form-control custom-rounded'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder='Enter Your Email'
//                   style={{ borderRadius: 20 }}
//                   required
//                 />
//               </div>
//               <div className='p-3'>
//                 <label htmlFor="password" className='form-label'>Password:</label>
//                 <input
//                   type='password'
//                   className='form-control custom-rounded'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder='Enter Your Password'
//                   style={{ borderRadius: 20 }}
//                   required
//                 />
//               </div>
//               <div className='p-3 d-grid'>
//                 <button type='submit' className='btn btn-primary btn-block custom-rounded' style={{ borderRadius: 20 }}>
//                   LOGIN
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' width="300px" alt="Login Illustration" />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector(state => state.auth); // Get both authentication status and error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password", { position: "top-right", autoClose: 3000 });
      return;
    }

    dispatch(login({ email, password }));
  };

  // Watch for authentication success
  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login Successful!", { position: "top-right", autoClose: 2000 });
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    }
  }, [isAuthenticated, navigate]);

  // Watch for login errors
  useEffect(() => {
    if (error) {
      toast.error(error, { position: "top-right", autoClose: 3000 });
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='' style={{ alignContent: 'center' }}>
              <h2 className='text-center'>Login Page</h2>
              <div className='p-3'>
                <label htmlFor="email" className='form-label'>Email:</label>
                <input
                  type='email'
                  className='form-control custom-rounded'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter Your Email'
                  style={{ borderRadius: 20 }}
                  required
                />
              </div>
              <div className='p-3'>
                <label htmlFor="password" className='form-label'>Password:</label>
                <input
                  type='password'
                  className='form-control custom-rounded'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter Your Password'
                  style={{ borderRadius: 20 }}
                  required
                />
              </div>
              <div className='p-3 d-grid'>
                <button type='submit' className='btn btn-primary btn-block custom-rounded' style={{ borderRadius: 20 }}>
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' width="300px" alt="Login Illustration" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;


