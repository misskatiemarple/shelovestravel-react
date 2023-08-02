import React from "react";
import "./itinerary.css";

export default function Itinerary() {
  return (
    <div className="itinerary-container">
      <img
        src="/itinerary/08.2023.jpg"
        alt="August 2023 itinerary"
        className="img-fluid itinerary-img"
      />
      <p>
        For the latest event news, please join the private members{" "}
        <a
          href="https://www.facebook.com/groups/shelovestravel"
          target="_blank"
          className="event-facebook-link"
        >
          Facebook Group
        </a>
      </p>
      <p>Download the PDF version of this document here</p>
    </div>
  );
}
