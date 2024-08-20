import React from "react";
import menuicon from "../../../../assets/images/menulogo.png";
const menuButton = () => {
  return (
    <div>
      <span>
        <img className="img-menu" src={menuicon} alt="menuicon" />{" "}
      </span>
    </div>
  );
};

export default menuButton;
