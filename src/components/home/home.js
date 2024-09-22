import "./home.scss";
import boys from "../../assets/images/boysfinal.jpg";
import merch from "../../assets/images/merch.jpg";
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
            <h1>WELCOME TO BRIDGEWATER-RARITAN VOLLEYBALL</h1>
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
                <h2 className="game-title">
                  Bridgewater VS Hunterdon Central{" "}
                </h2>
                <h3 className="date">Septemeber 24th, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.skylandconferencenj.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&school_id=4&G5button=13&G5genie=380&vw_schoolyear=1&vw_agl=35-3-5%2C&manual_access=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">@ BRHS</div>
                  </a>
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">
                  Bridgewater VS <br></br>Livingston
                </h2>
                <h3 className="date">Septemeber 25th, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.skylandconferencenj.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&school_id=4&G5button=13&G5genie=380&vw_schoolyear=1&vw_agl=35-3-5%2C&manual_access=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">
                      Varisty @ BRHS <br></br> Rest @ Livingston
                    </div>
                  </a>
                </h3>
              </div>
              <div className="schedule-block">
                <h2 className="game-title">
                  Bridgewater VS <br></br>Hillsborough
                </h2>
                <h3 className="date">Septemeber 26th, 4:00 P.M.</h3>
                <h3 className="team">
                  <a
                    href="https://www.skylandconferencenj.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&school_id=4&G5button=13&G5genie=380&vw_schoolyear=1&vw_agl=35-3-5%2C&manual_access=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="maps-link">@ Hillsborough</div>
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
            <div className="current-standings">
              <h1>Skyland Conference Delware Divison Standings</h1>
              <StandingBlock name="Hunterdon Central" record="8-0" />
              <StandingBlock name="North Hunterdon" record="6-3" />
              <StandingBlock name="Montgomery" record="5-4" />
              <StandingBlock name="Watchung Hills" record="3-3" />
              <StandingBlock name="Hillsborough" record="3-5" />
              <StandingBlock name="Bridgewater-Raritan" record="2-5" />
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
