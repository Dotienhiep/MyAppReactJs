import React, { useState, useEffect } from "react";
import { SliderWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Slider = ({ listData, isInfinity = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");

  const handlePrev = () => {
    setAnimationClass("slide-out"); // Áp dụng hiệu ứng trượt ra
    setTimeout(() => {
      if (isInfinity && currentIndex === 0) {
        setCurrentIndex(listData.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
      setAnimationClass("slide-in"); // Áp dụng hiệu ứng trượt vào
    }, 1500); // Thời gian trùng với thời gian animation
  };

  const handleNext = () => {
    setAnimationClass("slide-out"); // Áp dụng hiệu ứng trượt ra
    setTimeout(() => {
      if (isInfinity && currentIndex === listData.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      setAnimationClass("slide-in"); // Áp dụng hiệu ứng trượt vào
    }, 500); // Thời gian trùng với thời gian animation
  };

  const handleHover = (index) => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass("slide-in");
    }, 500);
  };

  useEffect(() => {
    const ef = setInterval(() => {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === listData.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationClass("slide-in");
      }, 500);
    }, 2000);
    return () => clearInterval(ef);
  }, [currentIndex, listData.length]);

  return (
    <SliderWrapper>
      <div className="wrapper">
        <button className="btn-prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="slider-content">
          <Link to="/">
            <img
              src={listData[currentIndex].image}
              alt=""
              className={animationClass} /* Sử dụng animation class */
            />
          </Link>
        </div>
        <button className="btn-next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="list-content-slider">
        {listData.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => handleHover(index)}
              className={`content-slider-item ${
                currentIndex === index ? "active" : ""
              }`}
            >
              {item.content}
            </span>
          );
        })}
      </div>
    </SliderWrapper>
  );
};

export default Slider;
