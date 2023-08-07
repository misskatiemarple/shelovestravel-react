import "./App.css";
import Services from "./services";
import Itinerary from "./itinerary";
import Accommodationslider from "./accommodationslider";
import Editorials from "./editorials";
import Podcast from "./podcast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const Facebookicon = <FontAwesomeIcon icon={faFacebook} />;
  const Instagramicon = <FontAwesomeIcon icon={faInstagram} />;
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            She Loves Travel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#services">
                  Services
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#accommodation">
                  Accommodation
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.facebook.com/groups/shelovestravel/"
                  target="_blank"
                >
                  Meet-ups
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#editorials">
                  Editorials
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#podcast">
                  Podcast
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="mb-4">
        <h3 className="headerh3">.TRAVEL.</h3>
        <h1 className="headerh1">The Wonders of Japan</h1>
        <h4 className="headerh4">
          Make your dream vacation a reality with <br />
          expert travel consulting
        </h4>
        <button className="btn btn-primary header-button">
          Book a consultation
        </button>
      </header>
      <div className="page-container">
        <h3 className="headerh3">ABOUT US.</h3>
        <p className="mt-3">
          She Loves Travel offers travel guidance and consulting to women who
          are planning their trip of a lifetime to Japan. Japan is one of the
          safest countries in the world for women and is ideal for solo female
          travel.{" "}
        </p>
        <p>
          Whether it be your first time or your hundredth, there is always more
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
        <h3 className=" headerh3 mt-5" id="services">
          OUR SERVICES.
        </h3>
        <Services />
        <h3 className=" headerh3 mt-5">WHAT'S ON IN AUGUST.</h3>
        <Itinerary />

        <div className="Acomodation suggestion">
          <h3 className=" headerh3 mt-5" id="accommodation">
            ACCOMMODATION.
          </h3>
          <p className="mt-3 mb-3">
            <strong>
              Whether you're planning a lavish girls trip or a shoestring solo
              adventure, our blue-tick verified recommendations will put your
              worries and stress to rest. The verified tick means that the
              property has been personally visited by the She Loves Travel team
              and is fantastic.{" "}
            </strong>
          </p>
          <p>
            Don't understand our icons? Well, simply put, the ❤️ means that we
            love the accommodation feature. The 🤔 face is something that you
            may need to consider. These are often the distance to stations or
            attractions, street lighting levels and non-gender-split shared
            facilities.{" "}
          </p>
          <Accommodationslider />
        </div>
        <h3 className="headerh3 mt-5" id="editorials">
          EDITORIALS.
        </h3>
        <Editorials />
        <h3 className="headerh3 mt-5" id="podcast">
          Podcast
        </h3>
        <p className="mt-3">
          On this podcast, we chat with women traveling or based in Japan. We'll
          have solopreneurs, local business owners and travelers pass through
          our recording booth. Interested in sharing your own travel story? Get
          in touch with us today.
        </p>
        <Podcast />
      </div>
      <footer className="text-center">
        <p> THE FINAL CALL TO ACTION</p>
        <a href="mailto:misskatiemarple@gmail.com">misskatiemarple@gmail.com</a>
        <h2>Come on over and say hello</h2>
        {Facebookicon}
        {Instagramicon}
      </footer>
    </div>
  );
}

export default App;
