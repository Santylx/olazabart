"use client";

import { useEffect, useState } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
  "/slide5.jpg",
  "/slide6.jpg",
  "/slide7.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 5s visible + 3s transición

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Texto pequeño abajo y centrado, más grande y más arriba */}
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem", // más abajo
          width: "100%",
          textAlign: "center",
          color: "rgba(198, 198, 198, 1)",
          fontWeight: "light",
          textShadow:'0.5px 0.5px 0.5px rgba(105, 105, 105, 0.8)', 
          fontSize: "12pt", // más pequeña
        }}
      >
        Contemporary Afro-Cuban Art Master 
      </div>

      {/* Fondo slideshow */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 3s ease-in-out",
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
}
