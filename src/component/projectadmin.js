// import React, { useState } from "react";
// const Admin =()=>{
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const handlesignup =()=>{
//         // localStorage.setItem("email",email);
//         // localStorage.setItem("password",password);
//         // alert("sign up sucessfull");
//     }
//     return(
//         <div>
//              <div className="container">
//         <div className="row">
//         <h2 className="text-center">Admin Page</h2>
//           <div className="col-md-6 card-center">
//             <div className="card " style={{ alignContent: "center" }}>
              
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
//                   onClick={handlesignup}
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

//         </div>
//     )
// }
// export default Admin;


import React, { useState } from "react";

const Admin = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handlesignup = () => {
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
        // alert("Sign up successful");
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card  p-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Admin Page</h2>
                <div className="mb-3 col-md-12">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <button
                    onClick={handlesignup}
                    type="button"
                    className="btn btn-primary btn-block w-100"
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
};

export default Admin;
