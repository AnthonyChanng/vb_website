import "./bottombar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react";
import smug from "../../assets/images/smugMug.jpg";
export default function Bottombar() {
  return (
    <section className="topsection bottombar-section">
      <div className="container bottombar-container">
        <div className="flex bottombar-flex">
          <div className="Location"></div>
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
  );
}
