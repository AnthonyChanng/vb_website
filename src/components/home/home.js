import "./home.scss";
import boys from "../../assets/images/boysfinal.jpg";
import merch from "../../assets/images/merch.jpg";
import homeGirls1 from "../../assets/images/homeGirls1.jpg";
import homeGirls2 from "../../assets/images/homeGirls2.jpg";
import homeGirls3 from "../../assets/images/homeGirls3.jpg";
const Home = () => {
  return (
    <>
      <section className="topsection home-section">
        <div className="container home-container">
          <div className="hero">
            <img className="hero-home" src={boys} alt="boys" />
            <div className="hero-text">
              <h1>Volleyball</h1>
              <h2>Bridgewater-Raritan High School</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container description-container">
          <div className="description">
            <h1>WELCOME TO BR VOLLEYBALL</h1>
            <div className="descriptionSummary">
              Panthers Volleyball is one of the most accomplished programs in NJ
              volleyball history. The 11 time state champs are a dominant power
              house in the state. Year after year, BR set the standard for
              volleyball within the state, cultivating a culture of hard work,
              discipline, and teamwork. The success of the program is more than
              just their many championship titles, but also the lasting impact
              that it leaves on its players. <br></br>
              <br></br>
              At every level of the team, the competivitive spirit burns deep.
              Joining the team is an opportunity to be part of one of the most
              decorated volleyball programs in the state. However, the program
              is much more than just winning, the atmosphere that has been
              created is also amazing. Here you can build great friendships,
              learn teamwork, develop confidence, and grasp discipline that can
              be used in all areas of life. Even if you don't join the team,
              come out and show your support! The players appreciate everyone
              for coming out whenever there is a game.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container schedule-container">
          <div className="schedule">
            <h1>UPCOMING GAMES</h1>
            <div className="games">
              <div className="schedule-block">
                <h2 className="game-title">Bridgewater VS Roxbury </h2>
                <h3 className="date">Septemeber 3rd, 4:00 P.M.</h3>
                <h3 className="team">
                  Girls Freshman @ Bridgewater-Raritan HS<br></br> Girls J.V. &
                  Varsity @ Roxbury HS
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">Bridgewater VS Hunterdon Central</h2>
                <h3 className="date">Septemeber 5th, 4:00 P.M.</h3>
                <h3 className="team">
                  Girls Freshman @ Bridgewater-Raritan HS<br></br> Girls J.V. &
                  Varsity @ Hunterdon Central Regional HS
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">
                  Bridgewater VS West Windsor-Plainsboro North
                </h2>
                <h3 className="date">Septemeber 11st, 4:00 P.M.</h3>
                <h3 className="team">
                  All Girls Games @ Bridgewater-Raritan HS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {" "}
          <div className="third-bar">
            <div className="left-side-third">
              <div className="current-standings">
                <h1>Skyland Conference Delware Divison Standings</h1>
                <div className="standing-items">
                  <div className="standings-title">Bridgewater-Raritan</div>
                  <div className="standings-record">0-0</div>
                </div>
                <div className="standing-items">
                  <div className="standings-title">Hillsborough</div>
                  <div className="standings-record">0-0</div>
                </div>
                <div className="standing-items">
                  <div className="standings-title">Hunterdon Central</div>
                  <div className="standings-record">0-0</div>
                </div>
                <div className="standing-items">
                  <div className="standings-title">Montgonmery</div>
                  <div className="standings-record">0-0</div>
                </div>
                <div className="standing-items">
                  <div className="standings-title">North Hunterdon</div>
                  <div className="standings-record">0-0</div>
                </div>
                <div className="standing-items">
                  <div className="standings-title">Watchung Hills</div>
                  <div className="standings-record">0-0</div>
                </div>
              </div>
              <div className="third-imgs">
                <img
                  className="third-girls-imgs"
                  src={homeGirls1}
                  alt="homeGirls1"
                />

                <img
                  className="third-girls-imgs"
                  src={homeGirls3}
                  alt="homeGirls3"
                />
                <img
                  className="third-girls-imgs"
                  src={homeGirls2}
                  alt="homeGirls2"
                />
              </div>
            </div>

            <div className="merch">
              <h1>2024 Girls Volleyball Merch</h1>
              <a
                href="https://www.spcustomgear.com/team/bridgewater-hs-girls-volleyball"
                target="_blank"
                rel="noreferrer"
              >
                <img className="merch-logo" src={merch} alt="merch" />
              </a>
              <h2>BUY AS SOON AS POSSIBLE! THE STORE IS CLOSING SOON!</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
