import React from "react";
import './Socials.css'

export const Socials = () => {
  return (
    <div>
      <div className="social-container">
        <h1 className="social-text">
          Follow us on Socials!
        </h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/blacksoiltheatre">
            <i className="ri-facebook-circle-fill facebook"></i>
          </a>
          <a href="https://www.instagram.com/blacksoiltheatre/">
            <i className="ri-instagram-fill instagram"></i>
          </a>
          <a href="https://www.youtube.com/@BlackSoilTheatre">
            <i className="ri-youtube-fill youtube"></i>
          </a>
          <a href="https://twitter.com/BiploveSurabhi">
            <i className="ri-twitter-x-fill twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
