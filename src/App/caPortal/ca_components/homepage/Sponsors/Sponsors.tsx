import React from "react";
import "./Sponsors.css"

function Sponsors() {
  return (
    <div>
      <div className="content1">
        <h1 style={{ color: "black" }}>Campus Outreach Partner</h1>
        <li><a href="https://www.vskills.in/"><img src={require("./sponsor_images/vskills.png")} alt="vskills_logo"/></a></li>
        <li><a href="https://easyshiksha.com/"><img src={require("./sponsor_images/easy_siksha.png")} alt="easy_siksha_logo"/></a></li>
      </div>
      <div className="content2">
        <h1 style={{ color: "black" }}>Goodies Partner</h1>
        <li><a href="https://instagram.com/mw.printing?utm_medium=copy_link"><img src = {require("./sponsor_images/printing.png")} alt="printing_logo"/></a></li>
        <li><a href="https://www.instagram.com/dastanthelabel/?utm_medium=copy_link"><img src={require("./sponsor_images/dastan_unisex_hoodies.jpeg")} alt = "dastan_unisex_hoodies_logo"/></a></li>
        <li><a href="https://ca.antaragni.in/"><img src={require("./sponsor_images/t&a.jpg")} alt="t&a_logo"/></a></li>
        <li><a href="https://www.instagram.com/casadecorhyderabad/"><img src={require("./sponsor_images/casa_decor.png")} alt = "casa_decor_logo"/></a></li>
        <li><a href="https://www.instagram.com/frescia_naturals/?hl=en"><img src={require("./sponsor_images/frescia.png")} alt = "frescia_logo"/></a></li>
      </div>
    </div>
  );
}

export default Sponsors;