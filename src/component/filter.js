import React from "react";

const NumberList = () => {
    // const numbers = Array.from({ length: 50 }, (v, i) => i + 1);
    //   const filterNumber = numbers.filter ((number) =>
    //       ![15,30,41,47,49].includes(number)
    //                                       );
  
    return (
      <div>
        <h1> print Numbers from 1 to 50:</h1>
        {/* <ul>
          {filterNumber.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul> */}
        <div className="continer ">
        
          <div className="d-flex  flex-wrap ">
            <div className="row">
          <div className=" col-md-12">

          <div className="card">
              <div className="col-md-9">
              <p>hello sridhar</p>

              </div>
              
              <div>
              <p>raj dharma</p>

              </div>
              <div className="col-md-12">
                <div className="card">
                  <p>besr habrer</p>
                </div>
              </div>
              {/* <div className='col-md-3 p-2'>
//                             <div className='card p-2'style={{ borderRadius: "12px" }}>
//                                 <p>best restaurants in Chennai</p>
//                             </div> */}

          </div>
          </div>
        
         
            
           

            </div>
           

          </div>

        </div>
      </div>
    );
  };
  
  export default NumberList;