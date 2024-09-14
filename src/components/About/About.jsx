import React from "react";
import "./About.css";
import ab1Image from '../../assets/ab1.jpg'
import ab2Image from '../../assets/ab2.jpg'

const About = () => {
  return (
    <>
      <div className="about-top">
        <p className="about-top-text">
          The Black Soil Theatre is continuously working in enriching the Hindi
          theater and film in Vidarbha.
        </p>
      </div>
      <div className="about-container">
        <div className="about-1">
          <div className="about-1-left">
            <p
              id="text1"
              className="about-1-text"
            >
              Black Soil Theatre is an active and creative theater organization
              in the Vidarbha region. As the name itself suggests, this theatre
              group is deeply rooted in the cultural roots of the Black Soil of
              its region and country from where creationism has flowered.
            </p>
          </div>
          <div className="about-1-right">
            <img
              className="about-1-image"
              src={ab1Image}
              alt=""
            />
          </div>
        </div>

        <div className="about-2">
          <div className="about-2-left">
            <img
              className="about-2-image"
              src={ab2Image}
              alt=""
            />
          </div>
          <div className="about-2-right">
            <p className="about-2-text">
              This region has been facing the deep pains of farmer problems.
              Among them is also the village of 'Waifad', known as the 'center
              of farmer-suicide'. The 'Black Soil Theatre' has been
              distinguished from time to time for staging various plays as well
              as intensive events for theatrical workshops, theatrical lectures
              / seminars and cultural events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
