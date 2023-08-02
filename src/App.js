import "./App.css";
import Accommodationslider from "./accommodationslider";
import Services from "./services";
import Itinerary from "./itinerary";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              She Loves Travel
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
                  Accomodation
                </a>
                <a class="nav-link" href="#">
                  Features
                </a>
                <a class="nav-link" href="#">
                  Updates
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header>
          <h3 class="Headerh3">.TRAVEL.</h3>
          <h1 class="Headerh1">The Wonders of Japan</h1>
          <h4 class="Headerh4">
            Make your dream vacation a reality with expert travel consulting
          </h4>
          <button className="btn btn-primary header-button">
            Book a consultation
          </button>
        </header>

        <h2>About us</h2>
        <p>
          She Loves Travel offers travel guidance and consulting to women who
          are planning their trip of a life time to Japan. Japan is one of the
          safest countires in the world for women, and is ideal for solo-female
          travel.{" "}
        </p>
        <p>
          Whether it be your first time or your hundreth, there is always more
          to discover. Our expert guidance will co-design your bespoke
          itinerary, saving you hours of research and stress.{" "}
        </p>
        <p>
          From our research, the average tourist to Japan will spend xx months
          planning their ideal trip. With our help, you'll have a tailored
          itinerary within a time frame that suits you.
        </p>
        <p>
          She Loves Travel members host regular women-only events in Kansai and
          Tokyo, where you can meet other members and enjoy the presence of
          local Japanese women who are keen to share their culture with you.{" "}
        </p>
        <p>
          So, let us take away the stress of vacation planning and book your
          consultation session today.{" "}
        </p>
        <h2>Our Services</h2>
        <Services />
        <h2>Autumn Itinerary</h2>
        <Itinerary />

        <div className="Acomodation suggestion">
          <h2>Accommodation.</h2>
          <Accommodationslider />
        </div>
        <div className="updates">Prices hikes for JR pass New beach open</div>
      </div>
    </div>
  );
}

export default App;
