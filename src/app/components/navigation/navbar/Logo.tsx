"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  // Update the size of the logo when the screen size changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
    return () => window.removeEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link
        href="/"
        style={{ 
          display: showButton ? "none" : "flex", 
          alignItems: "center", 
          justifyContent: "center",
          height: "100%" // Ensure the logo container takes full height
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            height: '100%', // Ensure the logo container takes full height
            marginTop: '0' // Remove marginTop as it might misalign the logo
          }}
        >
          <Image
            src="/Cyserch_logo.png"
            alt="Logo"
            width={width < 1024 ? 120 : 150} // Adjust the width as needed
            height={width < 1024 ? 30 : 40} // Adjust the height to fit the navigation bar
            layout="fixed" // Ensure fixed dimensions
            className="relative"
          />
        </div>
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      ></div>
    </>
  );
};

export default Logo;
