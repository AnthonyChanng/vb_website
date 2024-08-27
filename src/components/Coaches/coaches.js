import React from "react";
import "./coaches.scss";
import rom from "../../assets/images/coachRom.jpg";
import josh from "../../assets/images/coachJosh.jpg";
function coaches() {
  return (
    <div className="topsection coaches-section">
      <div className="container coaches-container">
        <div className="flex coaches-flex">
          <div className="coachRom">
            <img src={rom} alt="romPic" className="coachPics" />
            <div className="romDescription">hello</div>
          </div>
          <div className="coachJosh">
            <img src={josh} alt="joshPic" className="coachPics" />
            <div className="joshDescription">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default coaches;
