import { Carousel } from "bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero">SHE LOVES TRAVEL</div> <h2>Autumn Itinerary</h2>
      <img src="#"></img>
      <div className="slides">
        sliding carasol of cards for the events: date, time, highlight, cost,
        website
      </div>
      <div class="updates">Prices hikes for JR pass New beach open</div>
      <div class="Acomodation suggestion">
        <div className="verified-section">
          <div class="box box-border border-radius-10 max-width-500">
            <span class="verified-badge">
              <i class="fa-solid fa-check"></i>
            </span>
            <h3>Verified</h3>
            <p>
              She Codes Members and founder have found this accommodation
              excellent for solo women.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
