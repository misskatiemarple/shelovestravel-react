import React from "react";
import "./editorials.css";

export default function editorials() {
  return (
    <div className="editorials-container">
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title text-center">
                  The Ultimate Girls’ Guide to the Yodogawa Fireworks Festival
                  in Osaka
                </h5>
                <p className="card-text">
                  Paint the town with vibrant lights and sizzling vibes at the
                  Yodogawa Fireworks Festival in Osaka. It's THE summer soirée
                  you won't want to miss next year – think fireworks, friends,
                  and unforgettable memories. 🎇✨
                </p>
                <a
                  href="https://medium.com/@misskatiemarple/the-ultimate-girls-guide-to-the-yodogawa-fireworks-festival-in-osaka-bdefab6433ef"
                  class="btn btn-primary text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Exploring Japan’s Summer Wonders: A Solo Female Traveler’s
                  Guide (2023)
                </h5>
                <p className="card-text">
                  In Japan for the summer of 2023? Don't leave home without our
                  guide on what to expect, what to enjoy and even some fashion
                  suggestions. Japan is having the hottest summer in 150 years.
                  So, be prepared, and enjoy your ultimate summer in Japan.
                </p>
                <a
                  href="https://medium.com/@misskatiemarple/exploring-japans-summer-wonders-a-solo-female-traveler-s-guide-2023-b4c255d6cb85"
                  class="btn btn-primary text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://medium.com/@misskatiemarple"
          target="_blank"
          rel="noreferrer"
        >
          See all editorials{" "}
        </a>
      </div>
    </div>
  );
}
