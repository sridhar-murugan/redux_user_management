// import React, { useState } from "react";
// const Calc = ()=>{
//     const[finput,setfinput]=useState();
//     const[sinput,setsinput]=useState();
//     const [result, setResult] = useState(null);
//     const [error,setError] = useState();

//     const handleAdd = () => {
//         // if (!finput || !sinput) {
//         //     setError("Both input fields are required.");
//         //     return;
//         //   }
//       setResult(Number(finput) + Number(sinput));
//       setError("");
//     };
  
//     const handleSub = () => {
        
//       setResult(Number(finput) - Number(sinput));
//       setError("");
//     };
  
//     const handleMult = () => {
       
//       setResult(Number(finput) * Number(sinput));
//       setError("");
//     };

//     const handleDiv = () => {
       
//         setResult(Number(finput) / Number(sinput));
//         setError("");
//       };
//     return(
//         <div>
//             <input type="number"value={finput}style={{marginLeft:"10px",marginRight:"40px",marginBottom:"30px"}} onChange={(e)=> setfinput(e.target.value)} required></input>
//             <input type="number"value={sinput} onChange={(e)=> setsinput(e.target.value)} required></input>
//             <div className="mb-3 mt-3">
//                 <button onClick={handleAdd}style={{marginLeft:"10px",marginRight:"10px"}}> add</button>
//                 <button onClick={handleSub}style={{marginLeft:"10px",marginRight:"10px"}}>sub</button>
//                 <button onClick={handleMult}style={{marginLeft:"10px",marginRight:"10px"}}> mult</button>
//                 <button onClick={handleDiv}style={{marginLeft:"10px",marginRight:"10px"}}>div</button>
//             </div>
//            <h1> Result:{result}</h1>

//         </div>
//     )
// }
// export default Calc;