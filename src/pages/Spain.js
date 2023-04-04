import React from "react";
import "./pages.css";
import ImageSlider from "./components/ImageSlider";
import { SliderDataSpain } from "./components/SliderDataSpain.js";

const Spain = () => {
  return (
    <div className="container">
      <ImageSlider slides={SliderDataSpain} />
      <a
        className="link"
        href="https://www.spain.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Take me to Spain
      </a>
    </div>
  );
};

export default Spain;
