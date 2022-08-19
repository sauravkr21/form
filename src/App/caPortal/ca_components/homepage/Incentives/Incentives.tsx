import React from "react";
import "./Incentives.css";

function Incentives() {
  return (
    <div className="main">
      <div className="container">
        <div className="content text-center">
          <h1>INCENTIVES</h1>
          <p><h3><img src={require("./incentives_images/award-icon.jpg")} alt="award_image"/>  Certification</h3>Certificate of appreciation from Antaragni’21, IIT Kanpur recognizing your hardwork.</p>
          <p><h3><i className="fa fa-home"></i> Pronites</h3>Free entry for the top performing campus ambassadors in exclusive Pronites @ Antaragni'21</p>
          <p><h3><i className="fa fa-gears"></i> Internship Opportunities</h3>Top performing campus ambassadors will get a chance to gain professional experience through insternship provided by top companies</p>
          <p><h3><i className="fa fa-gift"></i> Goodies & Merchandise</h3>Win Antaragni merchandise, promising rewards, gift vouchers from top brands and much more!.</p>
        </div>
      </div>
    </div>
  );
}

export default Incentives;