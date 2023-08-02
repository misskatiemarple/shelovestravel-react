import React from "react";
import "./services";

export default function Services() {
  return (
    <div className="container services-container">
      <div className="row">
        <div className="col-md">
          <h2>Itineraries</h2>
          <p>
            We create unique travel plans tailored to your interest and
            preferences. Enjoy a hassle-free trip to Japan.
          </p>
        </div>
        <div className="col-md">
          <h2>Events</h2>
          <p>
            Join our women-only events and activities to meet other like-minded
            women just like you. Maybe you'll meet a future travel buddy or make
            a friend for life in Japan.
          </p>
        </div>
        <div className="col-md">
          <h2>Accommodation</h2>
          <p>
            Our verified accommodations have been personally visited by our
            founder or other She Loves Travel members and are excellent for
            female travelers.{" "}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md">
          <button className="btn btn-primary">Details</button>
        </div>
        <div className="col-md">
          <button className="btn btn-primary">Details</button>
        </div>
        <div className="col-md">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}
