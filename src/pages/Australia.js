import React from "react";
import "./pages.css";
import { SliderDataAustralia } from "./components/SliderDataAustralia";
import ImageSlider from "./components/ImageSlider";

const Australia = () => {
  return (
    <div className="container">
      <ImageSlider slides={SliderDataAustralia} />
      <a
        className="link"
        href="https://www.australia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Take me to Australia
      </a>
    </div>
  );
};

export default Australia;
