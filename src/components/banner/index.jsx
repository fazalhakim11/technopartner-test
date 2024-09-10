import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { banner: banners } = useSelector((state) => state.profile.profile);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Banners", banners);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [banners]);

  return (
    <div className="banner-slider">
      {banners && (
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="banner-image"
        />
      )}
    </div>
  );
};

export default Banner;
