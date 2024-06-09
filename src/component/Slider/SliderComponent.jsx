import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.css";
import slider_1_img from "../../images/slider/1.png";
import slider_2_img from "../../images/slider/2.png";
import slider_3_img from "../../images/slider/3.png";
import slider_4_img from "../../images/slider/4.png";

import SliderItem from "./SliderItem";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul className={styles.sliderList} style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: slider_1_img,
      text: "Credit Risk Analytics",
    },
    {
      image: slider_2_img,
      text: "Dashboard building",
    },
    {
      image: slider_3_img,
      text: "Recommended Engines",
    },
    {
      image: slider_4_img,
      text: "Data Preparation and Maintanence",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <SliderItem slide={slide} index={index} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
