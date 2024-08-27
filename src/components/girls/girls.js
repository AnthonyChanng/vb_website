import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.jpg";
import { girlsData } from "../../assets/data/girlsData";
import "./girls.scss";
import { Carousel } from "../Carousel/carousel";
export default function Girls() {
  return (
    <>
      <div className="topsection girls-section">
        <div className="container girls-container">
          <div className="flex girls-flex">
            <div className="imageGallery">
              <Carousel images={girlsData} />
            </div>
            <div className="rightSide">
              <div className="girlsDescription">
                BRHS Girls Volleyball are four time state champs as well as four
                time Somerset County Tournament Winners. The team has always
                been a dominant force and challengers to the championship. They
                had a strong performance last year, making it all the way to the
                semi-finals of the Somerset County Tournament before losing to
                Watchung Hills. Many players were recognized by the coaches
                across the conference and were given awards based on their
                stellar play.<br></br> <br></br>The team has a great
                relationship on and off the court, which speaks volumes to the
                environment built by the coaches and past players. A team bond
                is important to any sport and the one in BRHS Girls Volleyball
                Program is few and far between. There's a dynamic within the
                program that is a joy to be a part of and everyone genuinely
                enjoys their time there. <br></br> <br></br>With Coach Josh
                Everett at the helm, the team is an amazing thing to be a part
                of. Winning isn't everything, even though we do win a lot, the
                way we see it, every day is an opportunity to get better. Be it
                a win or a loss, a practice or a game, we take every day
                seriously and strive to grow as a team and people. We encourage
                all girls to tryout, regardless of their skill in volleyball!
                Tryouts are in August and be sure to join the Google Classroom
                for extra details.{" "}
              </div>
              <div className="girlsAwards">
                <h1>TEAM AWARDS:</h1>
                Madison Patton: All Skyland Conference Delware Divison First
                Team <br></br>
                Isabel Rivera: All Skyland Conference Delware Divison First Team{" "}
                <br></br>
                Irene Papanastasiou: All Skyland Conference Delware Divison
                Second Team <br></br>
                Vasi Papanastasiou: All Skyland Conference Delware Divison
                Second Team <br></br>
                Izzy Antunes: All Skyland Conference Delware Divison Honorable
                Mention <br></br>
              </div>
              <div className="socialsGirls">
                <div className="girlsInsta">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/brhsgirlsvb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="black"
                      className="iconGirls"
                    />
                  </a>
                  <div className="girlsTitle">Girls Instagram</div>
                </div>
                <div className="hudlGirls">
                  <div className="BRVBhudl">
                    <a href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324159/girls-varsity-volleyball">
                      {" "}
                      <img className="girlsHudl" src={hudl} alt="hudl" /> {""}
                    </a>
                    <div className="girlsTitle">Girls Hudl</div>
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
