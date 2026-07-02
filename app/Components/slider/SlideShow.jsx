'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Side1 from "../../../public/images/Slide-image-1.jpg";
import Side2 from "../../../public/images/Slide-image-2.jpg";
import Side3 from "../../../public/images/Slide-image-3.jpg";
import Side4 from "../../../public/images/Slide-image-4.jpg";
import Side5 from "../../../public/images/Slide-image-5.jpg";
import Side6 from "../../../public/images/Slide-image-6.jpg";
import Side7 from "../../../public/images/Slide-image-7.webp";

const images = [
  { image: Side1, alt: "Delicious meal 1" },
  { image: Side2, alt: "Delicious meal 2" },
  { image: Side3, alt: "Delicious meal 3" },
  { image: Side4, alt: "Delicious meal 4" },
  { image: Side5, alt: "Delicious meal 5" },
  { image: Side6, alt: "Delicious meal 6" },
  { image: Side7, alt: "Delicious meal 7" }
];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


return (
  <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl p-4 sm:p-8 md:p-12 lg:p-24">
    {/* Slides container */}
    <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full sm:w-[350px] md:w-[400px] mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={image.image}
            alt={image.alt}
            fill
            className="relative h-full w-full rounded-xl sm:rounded-2xl md:rounded-3xl object-cover"
            priority={index === currentIndex}
          />
        </div>
      ))}
    </div>

    {/* Slide indicators */}
    <div className="absolute flex items-center justify-center gap-2 bottom-2 sm:bottom-4 w-full">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
            index === currentIndex ? 'bg-white sm:w-6' : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);
}