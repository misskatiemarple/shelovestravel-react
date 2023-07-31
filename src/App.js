import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const CheckCircle = (
    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#3996f6" }} />
  );

  const ChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;
  const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />;
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
      <div className="body">
        <div className="wrapper">
          <div className="icon-left">{ChevronLeft}</div>
          <ul class="carousel">
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
          <div className="icon-right">{ChevronRight}</div>
        </div>
      </div>
      <div className="updates">Prices hikes for JR pass New beach open</div>
      <div className="Acomodation suggestion">
        <div className="verified-section">
          <div className="box box-border border-radius-10 max-width-500">
            <span className="verified-badge">
              <i className="fa-solid fa-check"></i>
            </span>
            {CheckCircle}
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
