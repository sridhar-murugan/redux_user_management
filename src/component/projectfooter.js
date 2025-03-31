import React from "react";
// import "./pro.css";
function Footer() {
  return (
    <div className="bg-dark" style={{ color: "white" }}>
      <div className="row">
        <div className="col-md-4 mt-4">
          <h2 className="S-28">Logo</h2>
        </div>
        <div className="col-md-2 mt-4 S-15">
          <h5>About</h5>
          <div className="D-15">Explore premium construction materials including cement, tiles, pipes, steel, and wires. Quality you can trust for your next project!</div>
          <div className="D-15">Live share</div>
          <div className="D-15"> Video record</div>
        </div>
        <div className="col-md-2 mt-4 S-15">
          <h5>Product</h5>
          <div className="D-15">cement</div>
          <div className="D-15"> tiles</div>
          <div className="D-15">pipes</div>
          <div className="D-15">steel</div>
        </div>
        <div className="col-md-2 mt-4 S-15">
          <h5>Contact Us</h5>
          <p>4/1276 Main road Chinthamani </p>
          <p>605 601</p>
          <p>Villupuram</p><br></br><br></br>
          <div>9524727123</div>
          <p>8695027921</p>

        </div>
        {/* <div className="col-md-2 mt-4">
          <div>
            <button className="bg-primary color-white B-15">Register</button>
          </div>
          <div className="mt-2">
            <button className="BB-15" >
              Log in
            </button>
          </div>
        </div> */}
        <hr></hr>
        {/* <div className="col-md-4 S-15">
          <div className="FF-15"> photo,inc.2019.we love our users</div>
        </div> */}
      </div>
    </div>
  );
}
export default Footer;
