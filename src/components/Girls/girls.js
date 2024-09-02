import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.png";
import { girlsData } from "../../assets/data/girlsData";
import liel from "../../assets/images/girlsTeam/liel.jpg";
import jada from "../../assets/images/girlsTeam/jada.jpg";
import liya from "../../assets/images/girlsTeam/liya.jpg";
import jahniah from "../../assets/images/girlsTeam/jahniah.jpg";
import kylie from "../../assets/images/girlsTeam/kylie.jpg";
import ella from "../../assets/images/girlsTeam/ella.jpg";
import hannah from "../../assets/images/girlsTeam/hannah.jpg";
import irene from "../../assets/images/girlsTeam/irene.jpg";
import blank from "../../assets/images/girlsTeam/blankGirls.png";
import josh from "../../assets/images/coachJosh.jpg";
import girlsNews1 from "../../assets/images/girlsNews1.png";
import girlsNews2 from "../../assets/images/girlsNews2.jpg";
import "./girls.scss";
import { Carousel } from "../Carousel/carousel";
export default function Girls() {
  return (
    <>
      <section>
        <div className="container girls-container">
          <div className="girls-first-bar">
            <div className="imageGallery">
              <Carousel images={girlsData} />
            </div>
            <div className="girls-rightSide">
              <div className="girls-description">
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
              <div className="girls-awards">
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
              <div className="socials-girls">
                <div className="girls-insta">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/brhsgirlsvb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="white"
                      className="icon-girls"
                    />
                  </a>
                  <div className="girls-title">Girls Instagram</div>
                </div>
                <div className="hudl-girls">
                  <div className="BRVBhudl">
                    <a
                      href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324159/girls-varsity-volleyball"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img className="girls-Hudl" src={hudl} alt="hudl" /> {""}
                    </a>
                    <div className="girls-title">Girls Hudl</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container girls-players-tab">
          <div className="girls-players-title">
            <h1>THE 2024 GIRLS BRVB VARSITY TEAM</h1>
          </div>
          <div className="girls-roster">
            <div className="girls-player">
              <img className="girls-player-img" src={liel} alt="" />
              Liel Raines Moshe
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={jada} alt="" />
              Jada Otero
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={liya} alt="" />
              Liya Medallion
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Emily Evaristo
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={kylie} alt="" />
              Kylie Rosander
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={jahniah} alt="" />
              Jahniah Biship
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={irene} alt="" />
              Irene Papanastasiou
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Madison Delia
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={hannah} alt="" />
              Hannah Arun
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Brielle Diaz
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Faye Gallou
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Molly Magner
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Ava Marvuglio
            </div>

            <div className="girls-player">
              <img className="girls-player-img" src={ella} alt="" />
              Ella Sorenson
            </div>
            <div className="girls-player">
              <img className="girls-player-img" src={blank} alt="" />
              Emily Leppert
            </div>
          </div>

          <div id="girls-no-img">
            Some images not found because they are new to the team. Please wait
            for the season to go on for images to be taken of them.
          </div>
        </div>
      </section>
      <section>
        <div className="container girls-third-bar">
          <div className="girls-coach">
            <div className="coach-title">
              <h1>HEAD COACH JOSH EVERETT</h1>
            </div>
            <img src={josh} alt="josh" className="josh" />
            <div className="coach-description">
              The coaching resume of Coach Josh Everett is very impressive.
              Before coming to BRHS as a coach, he coached girls and boys club
              for four seasons. He then transitioned to assistant varsity coach
              and junior varsity coach of both the girls and boys program. This
              past season, he was promoted to head coach of the girls varsity
              team. Before becoming a coach, Coach Everett was a player at BRHS
              and won a state championship. He also won another one as coach.
              <br></br>
              <br></br>
              Coach takes pride in making sure all of his players, not only
              respect him, but also each other. He makes great relationships
              with each of his players throughout practices and games. There
              will be many times when the team can just share a joke with him
              because of his charismatic personality. The environment he created
              is hard to come by and everyone enjoys being there with him as
              their leader.
            </div>
          </div>
          <div className="girls-recent-news">
            <div className="news-title">
              <h1>RECENT NJ GIRLS VOLLEYBALL NEWS</h1>
            </div>
            <div className="girls-news-item">
              <a
                href="https://www.nj.com/highschoolsports/2024/08/girls-volleyball-all-time-leaders-in-coaching-wins-entering-2024-season.html"
                target="blank"
                rel="noreferrer"
              >
                <img className="girls-news-img" src={girlsNews1} alt="" />
              </a>
              Girls volleyball: All-time leaders in coaching wins entering 2024
              season
            </div>
            <div className="girls-news-item">
              <a
                href="https://www.nj.com/highschoolsports/2024/08/compelling-girls-volleyball-storylines-to-follow-in-2024.html"
                target="blank"
                rel="noreferrer"
              >
                <img className="girls-news-img" src={girlsNews2} alt="" />
              </a>
              Compelling girls volleyball storylines to follow in 2024
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
