import "./home.scss";
import boys from "../../assets/images/boysfinal.jpg";
import girls from "../../assets/images/girls.jpg";
import Description from "../Description/description";
const Background = () => {
  return (
    <section className="topsection home-section">
      <div className="container home-container">
        <div className="backgrounds">
          <img className="boyBackground" src={boys} alt="boys" />
          <img className="girlBackground" src={girls} alt="girls" />
        </div>
        <div className="description">
          <Description />
        </div>
      </div>
    </section>
  );
};

export default Background;
