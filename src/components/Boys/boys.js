import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.png";
import { boysData } from "../../assets/data/boysData";
import harry from "../../assets/images/boysTeam/harry.jpg";
import cam from "../../assets/images/boysTeam/cam.jpg";
import aaryan from "../../assets/images/boysTeam/aaryan.jpg";
import corey from "../../assets/images/boysTeam/corey.jpg";
import andrew from "../../assets/images/boysTeam/andrew.jpg";
import vihaan from "../../assets/images/boysTeam/vihaan.jpg";
import rom from "../../assets/images/coachRom.jpg";
import rom2 from "../../assets/images/rom2.jpg";
import boysNews1 from "../../assets/images/boysNews1.jpg";
import boysNews2 from "../../assets/images/boysNews2.jpg";
import React, { useState } from "react";
import "./boys.scss";
import { Carousel } from "../Carousel/carousel";
export default function Boys() {
  const [open, setOpen] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <>
      <section>
        <div className="container boys-first-bar-container">
          <div className="imageGallery">
            <Carousel images={boysData} />
          </div>
        </div>
      </section>
      <section id="section boys-first-bar-section">
        <div className="container boys-first-bar-container">
          <div className="boys-description">
            The BRHS Boys Volleyball Team are back-to-back county champs as well
            as back-to-back North Group 4 champs. They have dominated these two
            tournaments these past two years and look to win for the third year
            in a row. Many players gained awards for their performance
            throughout the season and everyone had their fair share of time in
            the spotlight. Although there were a few keys pieces who graduated
            last year, a large part of this championship core has remained put.{" "}
            <br></br>
            <div
              id={
                openDescription
                  ? "boys-description-open"
                  : "boys-description-closed"
              }
              onClick={() => {
                setOpenDescription(!openDescription);
              }}
            >
              <PlusOpenDescription />
            </div>
            <div
              id={openDescription ? "open-second-boys" : "closed-second-boys"}
            >
              <br></br>The determination and strength across the team is not to
              be underestimated. After losing the first set in the county finals
              versus Ridge, and being down early in the last two sets, it looked
              all but over for the Panthers. However, the passion from every
              single player on the court shined through. Play after play, the
              practice and knowledge that was drilled into them by their coach,
              Corey Romanak, led them to make the right decisions and the
              eventual victory. <br></br>
              <br></br>One of the most important parts of the team is the great
              team chemistry that they have. From the countless pasta parties
              and bus rides to games and tournaments, there is an amazing bond
              that is hard to replicate anywhere else. If you have the passion
              for volleyball and strive to be a part of a winning culture, join
              the team! Tryouts are in late March and be sure to join the Google
              Classroom for more information.
              <div className="boys-awards">
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
              <h3>Team Socials:</h3>
              <div className="socials-boys">
                <div className="boys-insta">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/brboysvolleyball/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="white"
                      className="icon-boys"
                    />
                  </a>
                  <div className="boys-title">Boys Instagram</div>
                </div>
                <div className="BRVBhudl">
                  <a
                    href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324160/boys-varsity-volleyball"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img className="boys-Hudl" src={hudl} alt="hudl" /> {""}
                  </a>
                  <div className="boys-title">Boys Hudl</div>
                </div>
              </div>
            </div>
            <div
              id={
                openDescription
                  ? "boys-description-closed"
                  : "boys-description-open"
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
        <div className="container boys-players-tab">
          <div className="boys-players-title">
            <h1>THE 2025 BOYS BRVB VARSITY TEAM</h1>
          </div>
          <div className="boys-roster">
            <Player
              description="#18, Outside Hitter"
              name="Harrison Fromberg"
              src={harry}
            />
            <Player
              description="#5, Outsider Hitter"
              name="Vihaan Pradham"
              src={vihaan}
            />
            <Player
              description="#3, Libero/Setter"
              name="Andrew Zagula"
              src={andrew}
            />
            <Player
              description="#3, Opposite Hitter"
              name="Cameron Williams"
              src={cam}
            />
            <Player
              description="#11, Outside Hitter"
              name="Aaryan Arvind"
              src={aaryan}
            />
            <Player
              description="#30, Opposite Hitter"
              name="Corey Amermann"
              src={corey}
            />
          </div>
          <h3>MORE PLAYERS TO BE DETERMINED</h3>
        </div>
      </section>
      <section>
        <div className="container boys-third-bar">
          <div className="boys-coach">
            <div className="coach-title">
              <h1>HEAD COACH COREY ROMANAK</h1>
            </div>

            <div
              className={open ? "open-button" : "closed-button"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Open />
            </div>
            <div id={open ? "open-rom1" : "closed-rom1"}>
              <img src={rom} alt="romanak" className="romanak" />
            </div>
            <div id={open ? "open-rom2" : "closed-rom2"}>
              <img src={rom2} alt="romanak" className="romanak" />
            </div>
            <div
              className={
                open ? "open-coach-description" : "closed-coach-description"
              }
            >
              Coach Corey Romanak has been the head coach of the
              Bridgewater-Raritan High School Boys Varsity Volleyball program
              for over 25 years and was also the head coach of the girls program
              before stepping down last year. Under his leadership, the boys
              team has won two state championships and multiple county
              tournaments. The excellent coaching ability he possesses can't be
              underestimated. His skill and bravado push his players to do their
              best on and off the court and the level of respect that he
              commands from them is something that only a few people can
              achieve.
              <br></br>
              <br></br>
              As a player on the first NCAA Men's Volleyball Division III
              National Championship team in 1997, Coach Romanak knows what it
              takes to win, as a player and a coach. The bond that he shares
              with each of the kids is amazing. Over the four years that they
              are in the program, there is a close relationship formed between
              player and coach that is very rare. All the players enjoy being
              under his tutelage and learning from him.
            </div>
          </div>
          <div className="boys-recent-news">
            <div className="news-title">
              <h1>RECENT NJ BOYS VOLLEYBALL NEWS</h1>
            </div>
            <div className="boys-news-item">
              <a
                href="https://www.nj.com/highschoolsports/2024/06/boys-volleyball-all-state-full-postseason-honors-2024.html"
                target="blank"
                rel="noreferrer"
              >
                <img className="boys-news-img" src={boysNews1} alt="" />
              </a>
              Boys Volleyball All-State & full postseason honors, 2024
            </div>
            <div className="boys-news-item">
              <a
                href="https://www.nj.com/highschoolsports/2024/06/scotch-plains-fanwoods-tim-ennis-is-the-boys-volleyball-player-of-the-year-2024.html"
                target="blank"
                rel="noreferrer"
              >
                <img className="boys-news-img" src={boysNews2} alt="" />
              </a>
              Scotch Plains-Fanwood's Tim Ennis is the Boys Volleyball Player of
              the Year, 2024
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Player(prop) {
  return (
    <div className="boys-player">
      <img className="boys-player-img" src={prop.src} alt="" />
      {prop.name}
      <br></br>
      {prop.description}
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
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
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
          d="M4 12H20M12 4V20"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

function MinusOpenDescription() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
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
          d="M6 12L18 12"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
