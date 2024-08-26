import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.jpg";
import { boysData } from "../../assets/data/boysData";
import "./boys.scss";
import { Carousel } from "../Carousel/carousel";
export default function Boys() {
  return (
    <>
      <div className="topsection boys-section">
        <div className="container boys-container">
          <div className="flex boys-flex">
            <div className="imageGallery">
              <Carousel images={boysData} />
            </div>
            <div className="rightSide">
              <div className="boysDescription">
                The BRHS boys volleyball team are back-to-back county champs as
                well as back-to-back North Group 4 champs. They have dominated
                these two tournaments these past two years and look to win for
                the third year in a row. Although there were many keys pieces
                who graduated last year, a large part of this champsionship core
                has remained put.
              </div>
              <div className="socialsBoys">
                <div className="boysInsta">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/brboysvolleyball/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="black"
                      className="iconBoys"
                    />
                  </a>
                  <div className="boysTitle">Boys Instagram</div>
                </div>
                <div className="hudlBoys">
                  <div className="BRVBhudl">
                    <a href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324160/boys-varsity-volleyball">
                      {" "}
                      <img className="boysHudl" src={hudl} alt="hudl" /> {""}
                    </a>
                    <div className="boysTitle">Boys Hudl</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
