import React from "react";
import "./Responsibilities.css";

function Responsibilities() {
  return (
    <div className="main">
      <div className="book">
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        <input type="checkbox" id="c4" />
        <div id="cover"><img src="advertise.PNG" /></div>
        <div className="flip-book">
          <div className="flip" id="p1">
            <div className="back">
              <img src="organise.PNG" />
              <label className="back-btn">Back</label>
            </div>
            <div className="front">
              <h2>ADVERTISE</h2>
              <p>Publicize Antaragni and its sponsors in your college by sharing posts and promoting content by becoming a focal point for your respective college.</p>
              <label className="next-btn"><img src="next.png" /></label>
            </div>
          </div>

          <div className="flip" id="p2">
            <div className="back">
              <img src="conduct.PNG" />
              <label className="back-btn" >Back</label>
            </div>
            <div className="front">
              <h2>ORGANISE</h2>
              <p>Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance from mentors</p>
              <label className="next-btn" ><img src="next.png" /></label>
            </div>
          </div>


          <div className="flip" id="p3">
            <div className="back">
              <img src="coordinate.PNG" />
              <label className="back-btn" >Back</label>
            </div>
            <div className="front">
              <h2>CONDUCT</h2>
              <p>Help in management of elimination rounds in your college and city to select participants for the main event.</p>
              <label className="next-btn" ><img src="next.png"/></label>
            </div>
          </div>

          <div className="flip" id="p4">
            <div className="back">
                <label className="back-btn" >Back</label>
            </div>
            <div className="front">
              <h2>COORDINATE</h2>
              <p>Collaborate with the Antaragni team in organising on-ground events in your city</p>
              <label className="next-btn" ></label>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default Responsibilities;