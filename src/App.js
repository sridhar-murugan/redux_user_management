
// import React, { useEffect, useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import axios from 'axios';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Counter from './component/count';
// import NumberList from './component/filter';
// import Calc from './component/calculation';
// import TriangleStarPattern from './pattern/triangle star';
// import Increment from './component/countstae';
// import Increse from './component/counteffect';
// import Home from './component/propshome';
// import Sign from './component/projectsignup';
// import Navbor from './component/nav';
// import Login from './component/projectlogin';
// import AuthPage from './component/countstae';
// import Webside from './component/swigy';
// import Admin from './component/projectadmin';
// import ProductList from './component/projectprodectlist';
// import ProductDetails from './component/projectprodectdetial';
// import MobileList from './component/values';
// import Value from './component/values';
// import FullWidthSlider from './component/projectslider';
// import Footer from './component/projectfooter';
// import Signup from '../../my-app/src/component/frontendcode/signup';
// import Webside from '../src/component/'
// import store from "./redux/store"; 
// import { store } from './store';



// import Signup from './redux/reducsignup';
// import Login from './redux/reduxlogin';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import Home from './redux/home';


// import Sidebar from './component/portfolio/main';
import Portfolio from './component/portfolio/main';
import Navbar from './component/portfolio/main';
import Home from './component/portfolio/home';
// import Contact from './component/portfolio/contact';
// import About from './component/portfolio/about';
// import Skills from './component/portfolio/skills';







const App =()=> {

// const [data, setData]=useState([])

  // useEffect(() => {
  //   // Fetch data using Axios
  //   axios.get('http://localhost:8000/api/data') // Replace with your API endpoint
  //     .then((response) =>{
    
  //     setData(response.data.data)
  //     } )
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);



// app.delete('/deleteAge/:name', (req, res) => {
//   const { name } = req.params; // Extract the 'name' from the URL parameter

//   // Find the user by name and delete their 'age' property
//   const user = a.find(person => person.name === name);
//   if (user) {
//     delete user.age; // Delete the 'age' property
//     res.json({
//       message: `Age property deleted for ${name}`,
//       data: a,
//     });
//   } else {
//     res.status(404).json({ message: 'User not found!' });
//   }
// });


  return (
    <div>
    {/* {value.length !==0 &&(
      <>
        {console.log("kk",value[0].name)}
       {value[0].name}
       {value[0].age}
       {value[0].city}
      </>

    )} */}

{/* <div>
      <h1>Data from Backend</h1>
      {data.length > 0 ? (
        data.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div> */}
     {/* <Provider store={store}> */}
    <Router >
    <Routes>
     {/* <Route path="/Navbor"element={<Navbor/>}/>
    <Route path="/Sign"element={<Sign/>}/>
    <Route path="/Login"element={<Login/>}/>
      <Route path="/Counter"element={<Counter/>}/>
      <Route path="/Increment"element={<Increment/>}/>
      <Route path="/Value"element={<Value/>}/>
      <Route path="/Home"element={<Home/>}/>
      <Route path="/NumberList"element={<NumberList/>}/>
      <Route path="/TriangleStarPattern"element={<TriangleStarPattern/>}/>
      <Route path="/AuthPage"element={<AuthPage/>}/>
      <Route path="/Webside"element={<Webside/>}/>
      
      <Route path="/ProductList"element={<ProductList/>}/>
      <Route path="/ProductDetails"element={<ProductDetails/>}/>
      <Route path="/MobileList"element={<MobileList/>}/>
      <Route path="/FullWidthSlider"element={<FullWidthSlider/>}/>
      <Route path="/Footer"element={<Footer/>}/> 
      <Route path="/Singup"element={<Signup/>}/> */}
      {/* <Route path="/Webside"element={<Webside/>}/> */}

      {/* <Route path="/Signup"element={<Signup/>}/>
      <Route path="/Login"element={<Login/>}/> 
      <Route path="/Admin"element={<Admin/>}/>
      <Route path="/Home"element={<Home/>}/> */}


      {/* <Route path="/Sidebar"element={<Sidebar/>}/> */}

      <Route path="/Portfolio"element={<Portfolio/>}/>
      <Route path="/Navbar"element={<Navbar/>}/>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/Contact" element={<Contact />} /> */}
      {/* <Route path="/About" element={<About />} /> */}
      {/* <Route path="/Skills" element={<Skills/>} /> */}
    </Routes>

    </Router>
    {/* </Provider> */}

   </div>
  );
}

export default App;
