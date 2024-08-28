import "./home.scss";
import boys from "../../assets/images/boysfinal.jpg";
import girls from "../../assets/images/girls.jpg";
const Background = () => {
  return (
    <section className="topsection home-section">
      <div className="container home-container">
        <div className="back-pics">
          <img className="background" src={boys} alt="boys" />
          <img className="background" src={girls} alt="girls" />
        </div>
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
            decorated volleyball programs in the state. However, the program is
            much more than just winning, the atmosphere that has been created is
            also amazing. Here you can build great friendships, learn teamwork,
            develop confidence, and grasp discipline that can be used in all
            areas of life.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
