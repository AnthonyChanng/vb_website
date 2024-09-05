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
import blank from "../../assets/images/girlsTeam/blank.png";
import josh from "../../assets/images/coachJosh.jpg";
import girlsNews1 from "../../assets/images/girlsNews1.png";
import girlsNews2 from "../../assets/images/girlsNews2.jpg";
import josh2 from "../../assets/images/josh2.jpg";
import React, { useState } from "react";
import "./girls.scss";
import { Carousel } from "../Carousel/carousel";
export default function Girls() {
  const [open, setOpen] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <>
      <section>
        <div className="container girls-image-gallery">
          <div className="imageGallery">
            <Carousel images={girlsData} />
          </div>
        </div>
      </section>
      <section id="section girls-first-bar-section">
        <div className="container girls-first-bar-container">
          <div className="girls-description">
            BRHS Girls Volleyball are four time state champs as well as four
            time Somerset County Tournament Winners. The team has always been a
            dominant force and challengers to the championship. They had a
            strong performance last year, making it all the way to the
            semi-finals of the Somerset County Tournament before losing to
            Watchung Hills. Many players were recognized by the coaches across
            the conference and were given awards based on their stellar play.
            <br></br>
            <div
              id={
                openDescription
                  ? "girls-description-open"
                  : "girls-description-closed"
              }
              onClick={() => {
                setOpenDescription(!openDescription);
              }}
            >
              <PlusOpenDescription />
            </div>
            <div
              id={openDescription ? "open-second-girls" : "closed-second-boys"}
            >
              <br></br>The team has a great relationship on and off the court,
              which speaks volumes to the environment built by the coaches and
              past players. A team bond is important to any sport and the one in
              BRHS Girls Volleyball Program is few and far between. There's a
              dynamic within the program that is a joy to be a part of and
              everyone genuinely enjoys their time there. <br></br> <br></br>
              With Coach Josh Everett at the helm, the team is an amazing thing
              to be a part of. Winning isn't everything, even though we do win a
              lot, the way we see it, every day is an opportunity to get better.
              Be it a win or a loss, a practice or a game, we take every day
              seriously and strive to grow as a team and people. We encourage
              all girls to tryout, regardless of their skill in volleyball!
              Tryouts are in August and be sure to join the Google Classroom for
              extra details.{" "}
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
              <h3>Team Socials:</h3>
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
            <div
              id={
                openDescription
                  ? "girls-description-closed"
                  : "girls-description-open"
              }
              onClick={() => {
                setOpenDescription(!openDescription);
              }}
            >
              <MinusOpenDescription />
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
            <Player
              description="#1, DS/Libero"
              name="Liel Raines Moshe"
              insta="https://www.instagram.com/liel.raines/"
              src={liel}
            />
            <Player description="#2, Libero/DS" name="Jada Otero" src={jada} />
            <Player
              description="#6, Outside Hitter/DS"
              name="Liya Medallion"
              insta="https://www.instagram.com/liyamedallon/"
              src={liya}
            />

            <Player description="#4, Setter" name="Ella Sorenson" src={ella} />
            <Player
              description="#18, DS/Libero"
              name="Kylie Rosander"
              insta="https://www.instagram.com/ky.rosander/"
              src={kylie}
            />
            <Player
              description="#19, Middle Blocker"
              name="Jahniah Biship"
              insta="https://www.instagram.com/niah.bis/"
              src={jahniah}
            />
            <Player
              description="#21, Setter"
              name="Irene Papanastasiou"
              insta="https://www.instagram.com/irenepapn/"
              src={irene}
            />
            <Player description="#9, DS" name="Hannah Arun" src={hannah} />
            <Player
              description="#26, Opposite Hitter"
              name="Madion Delia"
              insta="https://www.instagram.com/madii__deliaa/"
              src={blank}
            />
            <Player
              description="#10, Outside Hitter"
              name="Emily Evaristo"
              insta="https://www.instagram.com/emilyvevaristo/"
              src={blank}
            />

            <Player
              description="TBD, Outside Hitter"
              name="Brielle Diaz"
              insta="https://www.instagram.com/brielle_diaz15/"
              src={blank}
            />
            <Player description="TBD, Setter" name="Faye Gallou" src={blank} />
            <Player
              description="TBD, Middle Blocker"
              name="Molly Magner"
              insta="https://www.instagram.com/mollym2288/"
              src={blank}
            />
            <Player
              description="TBD, Outside Hitter"
              name="Ava Marvuglio"
              insta="https://www.instagram.com/ava.marvuglio/"
              src={blank}
            />
            <Player
              description="#25, Middle Blocker"
              name="Emily Leppert"
              insta="https://www.instagram.com/emily_leppert7/"
              src={blank}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container girls-third-bar">
          <div className="girls-coach">
            <div className="coach-title">
              <h1>HEAD COACH JOSH EVERETT</h1>
            </div>
            <div
              className={open ? "open-button" : "closed-button"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Open />
            </div>
            <div id={open ? "open-josh1-div" : "closed-josh1-div"}>
              <img
                src={josh}
                alt="josh"
                id={open ? "open-josh1" : "closed-josh1"}
              />
            </div>
            <div id={open ? "open-josh2-div" : "closed-josh2-div"}>
              <img
                src={josh2}
                alt="josh"
                id={open ? "open-josh2" : "closed-josh2"}
              />
            </div>
            <div
              className={
                open ? "open-coach-description" : "closed-coach-description"
              }
            >
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

function Player(prop) {
  const [openSocial, setOpenSocials] = useState(false);
  return (
    <div className="girls-player" onClick={() => setOpenSocials(!openSocial)}>
      <img className="girls-player-img" src={prop.src} alt="" />
      <div className="girls-player-text">
        {prop.name}
        <br></br>
        {prop.description}
      </div>
      <div
        className={
          openSocial
            ? "open-girls-player-socials"
            : "closed-girls-players-socials"
        }
      >
        <a
          className="instagram"
          href={prop.insta}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color="white"
            className="icon-boys"
          />
        </a>
      </div>
    </div>
  );
}

function Open() {
  return (
    <svg
      width="40px"
      height="40px"
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      enable-background="new 0 0 20 20"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M19,20H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v18C20,19.6,19.6,20,19,20z M2,18h16V2H2V18z"></path>{" "}
        <polygon points="14,9 11,9 11,6 9,6 9,9 6,9 6,11 9,11 9,14 11,14 11,11 14,11 "></polygon>{" "}
      </g>
    </svg>
  );
}
function PlusOpenDescription() {
  return (
    <svg
      height="40px"
      width="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
          fill="#ffffff"
        ></path>{" "}
      </g>
    </svg>
  );
}

function MinusOpenDescription() {
  return (
    <svg
      height="40px"
      width="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
          fill="#ffffff"
        ></path>{" "}
      </g>
    </svg>
  );
}
