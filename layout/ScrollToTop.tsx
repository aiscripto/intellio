"use client";
import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const targetSelector =
      document.querySelector(".scroll-to-top")?.getAttribute("data-target") ||
      "body";
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="scroll-to-top scroll-to-target d-block"
      onClick={handleClick}
    >
      <span className="fa fa-angle-up" />
    </div>
  );
};

export default ScrollToTop;
