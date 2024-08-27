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
                The BRHS Boys Volleyball Team are back-to-back county champs as
                well as back-to-back North Group 4 champs. They have dominated
                these two tournaments these past two years and look to win for
                the third year in a row. Many players gained awards for their
                performance throughout the season and everyone had their fair
                share of time in the spotlight. Although there were a few keys
                pieces who graduated last year, a large part of this
                championship core has remained put. <br></br>
                <br></br>The determination and strength across the team is not
                to be underestimated. After losing the first set in the county
                finals versus Ridge, and being down early in the last two sets,
                it looked all but over for the Panthers. However, the passion
                from every single player on the court shined through. Play after
                play, the practice and knowledge that was drilled into them by
                their coach, Corey Romanak, led them to make the right decisions
                and the eventual victory. <br></br>
                <br></br>One of the most important parts of the team is the
                great team chemistry that they have. From the countless pasta
                parties and bus rides to games and tournaments, there is an
                amazing bond that is hard to replicate anywhere else. If you
                have the passion for volleyball and strive to be a part of a
                winning culture, join the team! Tryouts are in late March and be
                sure to join the Google Classroom for more information.
              </div>
              <div className="boysAwards">
                <h1>TEAM AWARDS:</h1>
                Harrison Fromberg: Skyland Conference Boys Volleyball Player of
                the Year, Skyland Conference First Team, All-State Third Team,
                and All-Group 4 First Team <br></br>Sean Marvuglio: All-Group 4
                Second Team and Skyland Conference First Team <br></br>Matthew
                Dolly: Skyland Conference First Team <br></br>Trevor Sullivan:
                Skyland Conference First Team <br></br>Vihaan Pradham: Skyland
                Conference Second Team <br></br>Cameron Willaims: Skyland
                Conference Second Team
                <br></br>Sudarshan Ganapathy: Conference Second Team<br></br>
                Coach Corey Romanak: Skyland Conference Coach of the Year
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
