import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Increse =()=>{
    const[count,setcount]=useState(0);
    const [message, setMessage] = useState(0);

useEffect(()=>{
    console.log(message);

    console.log("increase count value",count);
    console.log("useeffect run");
},[count]);



return(
    <div>
        <p>click on button increase count:<span>{count}</span></p>
        <button className="bg-primary p-2" onClick ={()=>{setcount(count + 1)}}>increment</button>
        <button onClick ={()=>{setMessage(message - 1)}}>decrement</button>
        <p>Message: {message}</p>

    </div>
)}
export default Increse;