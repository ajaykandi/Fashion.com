import "./styles/slider.css";
import { sliderItems } from "../data";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useState } from "react";

function Slider() {
  const [slideData, setSlideData] = useState(sliderItems);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const slide = {
    transform: `translateX(${slideIndex * -100}vw)`,
  };
  return (
    <div className="slider_container">
      <div className="slider_wrapper" style={slide}>
        {/* <--- slide---> */}
        {slideData?.map((slide) => {
          return (
            <div
              className="slide"
              style={{ background: `${slide.bg}` }}
              key={slide.id}
            >
              <div className="slide_img">
                <img src={slide.img} alt="" />
              </div>
              <div className="slide_info">
                <h1 className="slide_title">{slide.title}</h1>
                <p className="slide_desc">{slide.desc}</p>
                <button>
                  Shop Now <ArrowRightIcon />
                </button>
              </div>
            </div>
          );
        })}

        {/* <--- slide---> */}
      </div>
      <div className="prev" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div className="next" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default Slider;
