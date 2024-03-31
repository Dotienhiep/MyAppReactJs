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
  const handlePrev = () => {
    if (isInfinity && currentIndex === 0) {
      //Preview vô hạn
      setCurrentIndex(listData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (isInfinity && currentIndex === listData.length - 1) {
      //Next vô hạn
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleHover = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const ef = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === listData.length - 1) {
        setCurrentIndex(0);
      }
    }, 2000);
    return () => clearInterval(ef);
  }, [currentIndex, listData.length]);
  //slider content
  return (
    <SliderWrapper>
      <div className="wrapper">
        <button
          className="btn-prev"
          onClick={handlePrev}
          disabled={isInfinity && currentIndex === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="slider-content">
          <Link to="/">
            {/* page /sale */}
            <img src={listData[currentIndex].image} alt="" />
          </Link>
        </div>
        <button
          className="btn-next"
          onClick={handleNext}
          disabled={isInfinity && currentIndex === listData.length - 1}
        >
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
