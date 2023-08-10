import "./App.css";
import Services from "./services";
import Itinerary from "./itinerary";
import Accommodationslider from "./accommodationslider";
import Editorials from "./editorials";
import Podcast from "./podcast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const Facebookicon = <FontAwesomeIcon icon={faFacebook} className="fa-2x" />;
  const Instagramicon = (
    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
  );
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
                  What we do
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
          Discover Japan, your way with expert travel consulting <br />
          and women-only community
        </h4>
        <button className="btn btn-primary header-button mt-5">
          Book a consultation
        </button>
      </header>
      <div className="page-container">
        <h3 className="headerh3">ABOUT US.</h3>
        <p className="mt-3">
          She Loves Travel is your dedicated partner in crafting unforgettable
          journeys for women planning their dream trip to Japan. Japan stands as
          one of the safest countries in the world for women, making it an ideal
          destination for solo female adventurers.
        </p>
        <p>
          Whether you're embarking on your maiden voyage or adding to your list
          of adventures, the world of Japan holds endless wonders waiting to be
          explored. Our team of compassionate experts collaborate closely with
          you to co-create a tailored itinerary, sparing you the daunting task
          of hours of research and uncertainty.
        </p>
        <p>
          On average, individuals planning a trip to Japan invest several months
          in preparation. With She Loves Travel, your bespoke itinerary will
          materialize within a timeframe that matches your schedule and
          aspirations.
        </p>
        <p>
          Our heart-centered community comes alive through regular women-only
          gatherings in both Kansai and Tokyo. These intimate events provide the
          opportunity to connect with fellow adventurers and immerse yourself in
          the warmth of local Japanese women eager to share their culture and
          stories.
        </p>
        <p>
          Let us alleviate the complexities of vacation planning and embark on
          this transformative journey together. Secure your consultation session
          today, and let your adventure begin.
        </p>
        <h3 className=" headerh3 mt-5" id="services">
          WHAT WE DO.
        </h3>
        <Services />
        <h3 className=" headerh3 mt-5">WHAT'S ON.</h3>
        <Itinerary />

        <div className="Acomodation suggestion">
          <h3 className=" headerh3 mt-5" id="accommodation">
            ACCOMMODATION.
          </h3>
          <p className="mt-3 mb-3">
            <strong>
              Whether you're envisioning a lavish girls' trip or embarking on a
              shoestring solo adventure, our blue-tick verified recommendations
              are designed to alleviate worries and ease your mind. The verified
              tick indicates that our She Loves Travel team has personally
              visited and approved the property – ensuring an exceptional
              experience.
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
          LATEST EDITORIALS.
        </h3>
        <Editorials />
        <h3 className="headerh3 mt-5" id="podcast">
          PODCAST.
        </h3>
        <p className="mt-3">
          Welcome to the She Loves Travel Podcast, a heartfelt addition to
          capture the essence of our community. Here, we engage in genuine
          conversations with remarkable women who are on a journey through Japan
          or have embraced it as their home.{" "}
        </p>
        <p>
          If your soul is stirred to share own experiences of Japan reach out to
          us today and become a cherished part of the story we've weaving.
        </p>
        <Podcast />
      </div>
      <footer className="text-center">
        <h2 className="final-CTA">"Join the Sisterhood of Explorers"</h2>
        <h3 className="mb-3">Come on over and say hello</h3>
        <span>
          <a
            href="https://www.facebook.com/groups/shelovestravel"
            target="_blank"
            className="text-black"
          >
            {Facebookicon}
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/katie_marple/"
            target="_blank"
            className="text-black"
          >
            {Instagramicon}
          </a>
        </span>
        <p className="mt-3">
          Get in touch with our founder for questions, partnerships and podcast
          info...
        </p>
        <a href="mailto:misskatiemarple@gmail.com" className="text-black">
          misskatiemarple@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;
