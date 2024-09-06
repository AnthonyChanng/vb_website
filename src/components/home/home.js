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
                <h2 className="game-title">Bridgewater VS Hillsborough </h2>
                <h3 className="date">Septemeber 10th, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.google.com/maps/place/Hillsborough+High+School/@40.4963594,-74.6556901,15z/data=!4m2!3m1!1s0x0:0x9bb7efed2f51efc9?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      Girls Freshman @ Hillsborough HS
                    </div>
                  </a>
                  <br></br>{" "}
                  <a
                    href="https://www.google.com/maps/place/Bridgewater-Raritan+Regional+High+School/@40.592983,-74.6345277,15z/data=!4m2!3m1!1s0x0:0xbba3cedb6166d2e8?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      Girls J.V. & Varsity @ Bridgewater-Raritan HS
                    </div>
                  </a>
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">
                  Bridgewater VS West Windsor-Plainsboro North
                </h2>
                <h3 className="date">Septemeber 11st, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.google.com/maps/place/Bridgewater-Raritan+Regional+High+School/@40.592983,-74.6345277,15z/data=!4m2!3m1!1s0x0:0xbba3cedb6166d2e8?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      All Girls Games @ Bridgewater-Raritan HS
                    </div>
                  </a>
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">Bridgewater VS North Hunterdon</h2>
                <h3 className="date">Septemeber 12th, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.google.com/maps/place/Bridgewater-Raritan+Regional+High+School/@40.592983,-74.6345277,15z/data=!4m2!3m1!1s0x0:0xbba3cedb6166d2e8?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      Girls Freshman @ Bridgewater-Raritan HS
                    </div>
                  </a>
                  <br></br>
                  <a
                    href="https://www.google.com/maps/place/North+Hunterdon+Regional+High+School/@40.6284998,-74.8840778,15z/data=!4m2!3m1!1s0x0:0x86464c18df2ea4c9?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      Girls J.V. & Varsity @ North Hunterdon HS
                    </div>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container third-bar-container">
          <div className="third-bar">
            <div className="left-side-third">
              <div className="current-standings">
                <h1>Skyland Conference Delware Divison Standings</h1>
                <StandingBlock name="North Hunterdon" record="1-0" />
                <StandingBlock name="Montgomery" record="1-0" />
                <StandingBlock name="Hunterdon Central" record="1-0" />
                <StandingBlock name="Bridgewater-Raritan" record="0-2" />
                <StandingBlock name="Hillsborough" record="0-1" />
                <StandingBlock name="Watchung Hills" record="0-1" />
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

function StandingBlock(prop) {
  return (
    <div className="standing-items">
      <div className="standings-title">{prop.name}</div>
      <div className="standings-record">{prop.record}</div>
    </div>
  );
}
