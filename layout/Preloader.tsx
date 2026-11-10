"use client";
import React, { useEffect, useState } from "react";
const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 700);
  }, []);

  return (
    <div className={`preloader ${isVisible ? "" : "d-none"}`}>
      <div className="loader" />
    </div>
  );
};

export default Preloader;
