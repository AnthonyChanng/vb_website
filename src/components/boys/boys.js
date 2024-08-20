import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.jpg";

export default function Boys() {
  return (
    <>
      <div className="socials">
        <a
          className="instagram"
          href="https://www.instagram.com/brboysvolleyball/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="black" className="icon" />
        </a>
        <div className="BRVBhudl">
          <a href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324160/boys-varsity-volleyball">
            {" "}
            <img className="img-hudl" src={hudl} alt="hudl" /> {""}
          </a>
        </div>
      </div>
    </>
  );
}
