import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="container services-container">
      <div className="row mt-3">
        <div className="col-md border">
          <h2 className="text-center">Bespoke Itineraries</h2>
          <p>
            Experience the art of travel curation with our bespoke itineraries.
            Individually handcrafted to reflect your desires, each itinerary
            unveils a tapestry of unique experiences, ensuring your adventure
            through Japan is truly one-of-a-kind.
          </p>
          <button className="btn btn-primary mb-2">
            <a href="#"> Details</a>
          </button>
        </div>
        <div className="col-md border">
          <h2 className="text-center">Accommodation</h2>
          <p>
            Rest easy with our verified accommodations, tailored for women's
            comfort. Enjoy hassle-free stays with thoughtfully selected options
            featuring women-centric amenities and unbeatable accessibility. You
            can still search and book securely through your preferred site.
          </p>
          <button className="btn btn-primary mb-2">
            {" "}
            <a href="#accommodation"> Details</a>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md border">
          <h2 className="text-center">Events</h2>
          <p>
            Embrace the joy of shared experiences at our women-only events,
            where stories intertwine, friendships bloom, and the essence of
            Japan's hidden gems comes to life through authentic exploration.
          </p>
          <button className="btn btn-primary mb-2">
            {" "}
            <a
              href="https://www.facebook.com/groups/shelovestravel"
              target="_blank"
            >
              {" "}
              Details
            </a>
          </button>
        </div>
        <div className="col-md border">
          <h2 className="text-center">Consultation</h2>
          <p>
            Connect with our She Loves Travel Team through personalized video
            consultations. Address any travel concerns, from cultural nuances to
            crafting your perfect itinerary, all from the comfort of your own
            home.
          </p>
          <button className="btn btn-primary mb-2">Details</button>
        </div>
      </div>
    </div>
  );
}
