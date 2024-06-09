import React from 'react';
import styles from "./SliderComponent.module.css";
import svg_icon from "../../images/svg/image_upper.svg";

const SliderItem = ({ slide, index }) => {
  return (
    <div key={index} className={styles.slide}>
      <div className={styles.card}>
        <div className={styles.background_image} style={{ backgroundImage: `url(${slide.image})` }}></div>
        <div className={styles.white_background}>
          <div className={styles.svg_icon}>
            <img src={svg_icon} alt="SVG Icon" width={"100%"} />
          </div>
          <div className={styles.content}>
            <h2>{slide.text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
