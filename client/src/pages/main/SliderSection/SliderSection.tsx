import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery1 from "../../../assets/gallery1.png";
import gallery2 from "../../../assets/gallery2.png";
import gallery3 from "../../../assets/gallery3.png";
import gallery4 from "../../../assets/gallery4.png";
import gallery5 from "../../../assets/gallery5.png";

const SliderSection = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    arrows: false,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="slider-container cursor-pointer" onClick={() => navigate("/gallery")}>
      <Slider {...settings}>
        <div className="slick-slide">
          <img src={gallery1} alt="" />
        </div>
        <div className="slick-slide">
          <img src={gallery2} alt="" />
        </div>
        <div className="slick-slide">
          <img src={gallery3} alt="" />
        </div>
        <div className="slick-slide">
          <img src={gallery4} alt="" />
        </div>
        <div className="slick-slide">
          <img src={gallery5} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
