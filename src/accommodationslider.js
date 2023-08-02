import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./accommodationslider.css";

export default function Accommodationslider() {
  const ChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;
  const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />;

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="body">
      <div className="wrapper">
        <div className="icon-left" onClick={slideLeft}>
          {ChevronLeft}
        </div>
        <ul class="carousel" id="slider">
          <li className="card">
            <div class="img">
              <img src="/images/serbia.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
          <li className="card">
            <div class="img">
              <img src="/images/matala1.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
          <li className="card">
            <div class="img">
              <img src="/images/matala2.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
          <li className="card">
            <div class="img">
              <img src="/images/matala3.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
          <li className="card">
            <div class="img">
              <img src="/images/matala4.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
          <li className="card">
            <div class="img">
              <img src="/images/matala5.jpg" alt="blah" />{" "}
            </div>
            <h2>Accomodation name</h2>
            <span>location</span>
          </li>
        </ul>
        <div className="icon-right" onClick={slideRight}>
          {ChevronRight}
        </div>
      </div>
    </div>
  );
}
