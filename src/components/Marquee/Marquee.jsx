import React from "react";
import "./Marquee.css";
import image1 from "../../assets/m1.jpg";
import image2 from "../../assets/m14.jpg";
import image3 from "../../assets/m15.jpg";
import image4 from "../../assets/m2.jpg";
import image5 from "../../assets/m3.jpg";
import image6 from "../../assets/m4.jpg";
import image7 from "../../assets/m5.jpg";
import image8 from "../../assets/m6.jpg";
import image9 from "../../assets/m7.jpg";
import image10 from "../../assets/m8.jpg";
import image11 from "../../assets/m9.jpg";
import image12 from "../../assets/m10.jpg";
import image13 from "../../assets/m11.jpg";
import image14 from "../../assets/m12.jpg";
import image15 from "../../assets/m13.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const Marquee = () => {
  return (
    <>
      <div className="marquee-description">
        <p className="marquee-para">
          Team has also produced many documentary and short films such as for
          Sarvodaya ke liye Matra Shakti , Padmashri Niranjan Goswami etc.
        </p>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
          <img src={image7} />
          <img src={image8} />
          <img src={image9} />
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
          <img src={image14} />
          <img src={image15} />
        </div>
      </div>
    </>
  );
};

export default Marquee;
