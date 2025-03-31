// import React from "react";
// const Skills =()=>{
//     return(
//         <div className="container">
//             <div className="row"> 
//                 <div className="card"> 
//                     <div className="col-md-3">

//                     </div>
//                      </div>
//                      <div className=""> 
//                     <div className="col-md-3">
//                         <img src="https://www.brainvire.com/blog/wp-content/uploads/2019/04/How-ReactJS-can-fuel-your-business-for-success.jpg " width="150px"
//           alt="Signup Illustration"/>
//                         <img src=" "/>
//                         <img src=" "/>

//                     </div>
//                      </div>
//                      <div className="card"> 
//                     <div className="col-md-3">
//                     <img src=" "/>
//                     <img src=" "/>
//                     <img src=" "/>

//                     </div>
//                      </div>
//                      <div className="card"> 
//                     <div className="col-md-3">
//                     <img src=" "/>
//                     <img src=" "/>
//                     <img src=" "/>

//                     </div>
//                      </div>

//             </div>
           

//         </div>
//     )
// }
// export default Skills;



import React from "react";

const Skills = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontFamily: "Arial, Serif", fontSize: "28px", fontWeight: "bold", color: "#333", padding: "15px" }}>
        Skills
      </h1>
      <div className="row mt-2 justify-content-center">
        
        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="80px" alt="JavaScript" />
            </div>
            <h5 className="mt-2">JavaScript</h5>
          </div>
        </div>

       
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png" width="80px" alt="React.js" />
            </div>
            <h5 className="mt-2">React.js</h5>
          </div>
        </div>

        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-128.png" width="80px" alt="CSS3" />
            </div>
            <h5 className="mt-2">CSS3</h5>
          </div>
        </div>

        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png" width="80px" alt="HTML5" />
            </div>
            <h5 className="mt-2">HTML5</h5>
          </div>
        </div>

        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="80px" alt="Bootstrap" />
            </div>
            <h5 className="mt-2">Bootstrap</h5>
          </div>
        </div>

        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-128.png" width="80px" alt="SASS" />
            </div>
            <h5 className="mt-2">SASS</h5>
          </div>
        </div>

        
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-128.png" width="80px" alt="Git" />
            </div>
            <h5 className="mt-2">Git</h5>
          </div>
        </div>

       
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card p-3 text-center shadow" style={{ height: "200px" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
              <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-1024.png" width="80px" alt="GitHub" />
            </div>
            <h5 className="mt-2">GitHub</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

