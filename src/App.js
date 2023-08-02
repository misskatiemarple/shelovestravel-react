import "./App.css";
import Accommodationslider from "./accommodationslider";
import Services from "./services";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
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
      <div className="hero">
        <h1>Explore the Wonders of Japan</h1>
        <h2>
          Make your dream vacation a reality with expert travel consulting
        </h2>
        <button className="btn btn-primary">Book a consultation</button>
      </div>
      <h2>About us</h2>
      <p>
        She Loves Travel offers travel guidance and consulting to women who are
        planning their trip of a life time to Japan. Japan is one of the safest
        countires in the world for women, and is ideal for safe solo-female
        travel. Whether it be your first time to Japan or your hundreth there is
        always more to discover. Our expert guidance will co-design your bespoke
        itinerary, saving you hours of research and stress. From our research,
        the average tourist to Japan will spend xx months planning their ideal
        trip. With our help, you'll have a tailored itinerary within a time
        frame that suits you. With a personalized itinerary you can immerse
        yourselves in Japanese culture, try new foods and meet the local people.
        She Loves Travel members host regular women-only events in Kansai and
        Tokyo, where you can meet other members and enjoy the presence of local
        Japanese women who are keen to share their culture with you. So, let us
        take away the stress and hard work of vacation planning and book your
        consultation session today.{" "}
      </p>
      <h2>Our Services</h2>
      <Services />
      <h2>Autumn Itinerary</h2>
      <div className="updates">Prices hikes for JR pass New beach open</div>
      <div className="Acomodation suggestion">
        <h2>Accommodation.</h2>
        <Accommodationslider />
      </div>
    </div>
  );
}

export default App;
