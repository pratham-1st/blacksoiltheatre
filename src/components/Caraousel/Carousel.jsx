import React, { useState, useEffect } from "react";
import "./Carousel.css";
import image1 from "../../assets/c1.jpg";
import image2 from "../../assets/c2.jpg";
import image3 from "../../assets/c3.jpg";
import image4 from "../../assets/c4.jpg";
import image5 from "../../assets/c5.jpg";
import image6 from "../../assets/c6.jpg";

const SimpleCarousel = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
    </div>
  );
};

export default SimpleCarousel;
