// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User registered:', email);
//     navigate('/login');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Signup</button>
//     </form>
//   );
// }





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // const Signup = () => {
//   export default function Signup() {
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User registered:', email);
//     setemail('');
//     setpassword('');

//     navigate('/login');
    
//   };
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
//   return (
//     <form onSubmit={handleSubmit}>
//     <div className='container vh-100 d-flex justify-content-center align-items-center'>
//       <div className='row'>
//         {/* <div className='card'> */}
//           <div className='col-md-6'>
//             <div className='' style={{ alignContent: 'center' }}>

//               <h2 className='text-center'>Signup Page</h2>
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
//                 <button  type='submit' className='btn btn-primary btn-block custom-rounded'style={{borderRadius:20}}>Signup</button>
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

   
//   )
// }
// export default Signup;





import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/authenticationSlice';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    dispatch(signup({ email, password }));

    
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='' style={{ alignContent: 'center' }}>
              <h2 className='text-center'>Signup Page</h2>
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
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' width="300px" alt="Signup Illustration" />
          </div>
        </div>
      </div>
    </form>
  );
}
