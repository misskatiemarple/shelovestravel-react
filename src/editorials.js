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
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title text-center">Must See Hydrangea Spots</h5>
                <p className="card-text">
                  Kansai's hydrangea blooms will leave you spellbound with their
                  array of colors. So, let's embark on a floral adventure by
                  visiting these top locations.
                </p>
                <a
                  href="https://medium.com/@misskatiemarple/embrace-the-exquisite-hydrangeas-and-vibrant-festivities-of-kansai-this-june-a0707bc02996"
                  class="btn btn-primary text-center"
                >
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
