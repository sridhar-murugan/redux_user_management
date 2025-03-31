// import React, { useState } from "react";
// const Increment =()=>{
//     const[count,setcount]=useState(0);



// return(
//     <div>
//         <p>click on button increase count:<span>{count}</span></p>
//         <button onClick={()=>setcount(count + 1)}>submit</button>

//     </div>
// )}
// export default Increment;
// console.log("hello world")
import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="btn btn-link p-0"
              onClick={toggleMode}
              style={{ textDecoration: "none" }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
