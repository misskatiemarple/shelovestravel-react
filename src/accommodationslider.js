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
              <img
                src="./images/accommodation/maya.png"
                alt="Guesthouse Maya"
              />{" "}
            </div>
            <h2>{CheckCircle} Guesthouse Maya</h2>
            <span>Kobe</span>
            <ul className="review">
              <li className="review">❤️ Seperate female-only dorm</li>
              <li className="review">❤️ Homely atmosphere</li>
              <li className="review">❤️ Regular events</li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/calendar hotel.png"
                alt="Calendar Hotel"
              />{" "}
            </div>
            <h2>{CheckCircle} Calendar Hotel</h2>
            <span>Otsu, Shiga</span>
            <ul className="review">
              <li className="review">❤️ Next to station</li>
              <li className="review">❤️ Female-only dorm</li>
              <li className="review">❤️ CCTV above female dorm access</li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/ninja and geisha.png"
                alt="Ninja and Geisha Hotel"
              />{" "}
            </div>
            <h2>Ninja & Geisha</h2>
            <span>Osaka</span>
            <ul className="review">
              <li className="review">❤️ Women-only floor</li>
              <li className="review">❤️ Powder Room</li>
              <li className="review">❤️ Lockers </li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/granvia wakayama.png"
                alt="Granvia Hotel Wakayama"
              />{" "}
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
              <img
                src="./images/accommodation/tunestay.png"
                alt="Tune Stay Hotel"
              />{" "}
            </div>
            <h2>{CheckCircle} Tune Stay</h2>
            <span>Kyoto</span>
            <ul className="review">
              <li className="review">❤️ Reading Lounge</li>
              <li className="review">❤️ Modern private rooms</li>
              <li className="review">❤️ Location </li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/first cabin midosuji.png"
                alt="First Cabin Midosuji"
              />{" "}
            </div>
            <h2> First Cabin Midosuji</h2>
            <span>Namba, Osaka</span>
            <ul className="review">
              <li className="review">❤️ Seperate gender dorms</li>
              <li className="review">❤️ Location</li>
              <li className="review">🤔 Shared communal areas </li>
            </ul>
          </li>
          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/asahi plaza.png"
                alt="Ninja and Geisha Hotel"
              />{" "}
            </div>
            <h2>Capsule Hotel Asahi Plaza</h2>
            <span>Shinsaibashi, Osaka</span>
            <ul className="review">
              <li className="review">❤️ Women-only dorm</li>
              <li className="review">❤️ Sauna</li>
              <li className="review"> 🤔 Location </li>
            </ul>
          </li>

          <li className="card">
            <div class="img">
              <img src="./images/accommodation/maja.png" alt="Maja Hotel" />{" "}
            </div>
            <h2> Maja Hotel</h2>
            <span>Kyoto</span>
            <ul className="review">
              <li className="review">❤️ Women only</li>
              <li className="review">❤️ Location</li>
              <li className="review"> ❤️ Complimentary toiletries </li>
            </ul>
          </li>

          <li className="card">
            <div class="img">
              <img
                src="./images/accommodation/nanohana.png"
                alt="Guesthouse Nanohana"
              />{" "}
            </div>
            <h2>Guesthouse Nanohana</h2>
            <span>Kyoto</span>
            <ul className="review">
              <li className="review">❤️ Women-only guesthouse</li>
              <li className="review">❤️ Clean, cozy and welcoming</li>
              <li className="review">❤️ Location </li>
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
