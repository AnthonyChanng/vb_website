import "./navbar.scss";
import brvb from "../../assets/images/brvb.jpg";
import highPerform from "../../assets/images/njhighperformance.webp";
import { Link } from "react-router-dom";
import Menu from "./Menu/menu.js";
export default function Navbar() {
  return (
    <>
      <div className="topsection navbar-section">
        <div className="container navbar-container">
          <div className="flex navbar-flex">
            <div className="logo">
              <Link to="/">
                <img className="img-logo" src={brvb} alt="brvb" />{" "}
              </Link>
            </div>
            <div className="name">
              <h1 className="schoolName">
                {" "}
                Bridgewater-Raritan Highschool Volleyball
              </h1>
            </div>
            <div className="camp">
              <a href="https://www.njhighperformancevolleyball.com/">
                <img className="img-high" src={highPerform} alt="highPerform" />{" "}
                {""}
              </a>
            </div>
            <div className="dropmenu">
              <Menu content={<p>hello world</p>} />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
