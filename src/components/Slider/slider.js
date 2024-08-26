import "./slider.scss";
import boys1 from "../../assets/images/boysGallery/boys1.jpg";
import boys2 from "../../assets/images/boysGallery/boys2.jpg";
import boys3 from "../../assets/images/boysGallery/boys3.jpg";
import boys4 from "../../assets/images/boysGallery/boys4.jpg";
import boys5 from "../../assets/images/boysGallery/boys5.jpg";
// import boys6 from "../../assets/images/boysGallery/boys6.jpg";
// import boys7 from "../../assets/images/boysGallery/boys7.jpg";
function slider() {
  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        <div className="carousel_card">
          <img src={boys1} alt="" />
        </div>
        <div className="carousel_card">
          <img src={boys2} alt="" />
        </div>
        <div className="carousel_card">
          <img src={boys3} alt="" />
        </div>
        <div className="carousel_card">
          <img src={boys4} alt="" />
        </div>
        <div className="carousel_card">
          <img src={boys5} alt="" />
        </div>
        {/* <div className="carousel_card">
          <img src={boys6} alt="" />
        </div>
        <div className="carousel_card">
          <img src={boys7} alt="" />
        </div>  */}
      </div>
    </div>
  );
}

export default slider;
