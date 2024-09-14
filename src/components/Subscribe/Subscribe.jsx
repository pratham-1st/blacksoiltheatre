import React from "react";
import "./Subscribe.css";
import logo from '../../assets/logo.png'

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      {/* Card 1 */}
      <div className="subscribe-part-1">
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xTt2ewh0kCY?si=RwB4EcCL_VI7HSQD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* Card 2 */}
      <div className="subscribe-part-2">
        <h1 className="subscribe-text">Watch us on YouTube!</h1>
        <div className="subscribe-button">
          <img
            src={logo}
            alt=""
            className="subscribe-logo"
          />
          <a href="https://www.youtube.com/@BlackSoilTheatre">
            <button className="subscribe-btn">Subscribe</button>
          </a>
        </div>
        </div>
      </div>
  );
};

export default Subscribe;
