// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const navigate = useNavigate();

//   if (!isAuthenticated) {
//     navigate('/login');
//     return null;
//   }

//   return <h1 className=' align-items-center'> Welcome to Home Page!</h1>;
// };

// export default Home;





import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Home</a>
          
          <div className="ml-auto">
            <button 
              className="btn btn-outline-primary mx-2" 
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      
      <div className="container text-center mt-5">
        <h1>Welcome to Home Page</h1>
      </div>
    </div>
  );
};

export default Home;

