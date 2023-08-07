import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./accommodationslider.css";

export default function Accommodationslider() {
  const ChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;
  const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />;
  const CheckCircle = (
    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#3996f6" }} />
  );

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="body mt-3">
      <div className="wrapper">
        <div className="icon-left" onClick={slideLeft}>
          {ChevronLeft}
        </div>
        <ul class="carousel" id="slider">
          <li className="card">
            <div class="img">
              <img src="#" alt="Citadines Hotel" />{" "}
            </div>
            <h2>Citadines Hotel</h2>
            <span>Shinjuku, Tokyo</span>
            <ul className="review">
              <li className="review">❤️ Female night staff</li>
              <li className="review">❤️ Good privacy and secutiry</li>
              <li className="review">🤔Distance from main station </li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img src="#" alt="Granvia Hotel Wakayama" />{" "}
            </div>
            <h2>{CheckCircle} Granvia Hotel Wakayama</h2>
            <span>Wakayama</span>
            <ul className="review">
              <li className="review">❤️ Next to station</li>
              <li className="review">❤️ Bike hire</li>
              <li className="review">🤔 Distance to attractions</li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img src="#" alt="The Calendar Hotel" />{" "}
            </div>
            <h2>{CheckCircle} The Calendar</h2>
            <span>Otsu, Shiga</span>
            <ul className="review">
              <li className="review">❤️ Close to Lake Biwa</li>
              <li className="review">❤️ Gender split areas</li>
              <li className="review">🤔 Shared showers?</li>
            </ul>
          </li>
        </ul>
        <div className="icon-right" onClick={slideRight}>
          {ChevronRight}
        </div>
      </div>
    </div>
  );
}
