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
                  Yodogawa Fireworks Festival
                </h5>
                <p className="card-text">
                  In 2023 we welcomed back the fabulous Yodogawa Summer
                  Fireworks Festival. With over 30,000 fireworks, here's our
                  recommendations for next year.
                </p>
                <a href="#" class="btn btn-primary text-center">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
