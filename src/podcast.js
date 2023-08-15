import React from "react";
import "./podcast.css";

export default function Podcast() {
  return (
    <div className="podcast-container">
      <iframe
        src="https://open.spotify.com/embed/show/1j3CF6kVQhJYEHjsD0sdtb?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="She Loves Travel Podcast"
      ></iframe>
    </div>
  );
}
