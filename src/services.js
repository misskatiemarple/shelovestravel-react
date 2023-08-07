import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="container services-container">
      <div className="row mt-3">
        <div className="col-md border">
          <h2 className="text-center">Bespoke Itineraries</h2>
          <p>
            We create unique travel plans tailored to your interest and
            preferences. Enjoy a hassle-free trip to Japan.
          </p>
          <button className="btn btn-primary mb-2">Details</button>
        </div>
        <div className="col-md border">
          <h2 className="text-center">Accommodation</h2>
          <p>
            Our verified accommodations have been personally visited by our
            founder or other She Loves Travel members and are excellent for
            female travelers.{" "}
          </p>
          <button className="btn btn-primary mb-2">Details</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md border">
          <h2 className="text-center">Events</h2>
          <p>
            Join our women-only events and activities to meet other like-minded
            women just like you. We have events running in Kansai and Tokyo. For
            2024 you can also expect small tours. It's the perfect way to meet
            fellow female travelers in a new country. Maybe you'll meet a future
            travel buddy or make a friend for life in Japan.
          </p>
          <button className="btn btn-primary mb-2">Details</button>
        </div>
        <div className="col-md border">
          <h2 className="text-center">Consultation</h2>
          <p>
            Got burning questions about your trip to Japan? Unsure about the
            customs or cultures and the taboos? Want to learn some basic
            Japanese before your trip? Our consultation sessions will take you
            from being an uncertain stressball to a woman in control and
            stress-free during your dream vacation.
          </p>
          <button className="btn btn-primary mb-2">Details</button>
        </div>
      </div>
    </div>
  );
}
