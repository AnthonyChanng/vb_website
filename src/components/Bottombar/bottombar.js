import "./bottombar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import brvb from "../../assets/images/brvb.jpg";
import highPerform from "../../assets/images/njhighperformance.webp";
import { Link } from "react-router-dom";
import smug from "../../assets/images/smugMug.jpg";
export default function Bottombar() {
  return (
    <>
      <section className="topsection bottombar-section">
        <div className="container bottombar-container">
          <div className="flex bottombar-flex">
            <div className="logos">
              <div className="hslogo">
                <Link to="/">
                  <img className="hsimg" src={brvb} alt="brvb" />{" "}
                </Link>
              </div>
              <div className="camplogo">
                <a href="https://www.njhighperformancevolleyball.com/">
                  <img
                    className="highlogo"
                    src={highPerform}
                    alt="highPerform"
                  />{" "}
                  {""}
                </a>
              </div>
            </div>
            <div className="extraInfo">
              <div className="location">
                Bridgewater-Raritan Highschool<br></br>
                600 Garretson Rd, Bridgewater, NJ 08807
              </div>
              <div className="internalLinks">
                Links:
                <div className="pages">
                  <Link to="/">HOME</Link>
                  <Link to="/Boys">BOYS</Link>
                  <Link to="/Girls">GIRLS</Link>
                  <Link to="/Coaches">COACHES</Link>
                </div>
              </div>
            </div>
            <div className="imgOrigin">
              Images from ktusim and PhotographedBySam
              <div className="links">
                <div className="smugMug">
                  <a href="https://ktusim.smugmug.com/">
                    <img className="smugLogo" src={smug} alt="smug" />{" "}
                  </a>
                </div>
                <div className="insta">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/photographedbysamm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="black"
                      className="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
