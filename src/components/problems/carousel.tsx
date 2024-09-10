import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  // Trigger animation only when currentIndex changes
  useEffect(() => {
    setAnimate(true); // Start animation
    const timer = setTimeout(() => {
      setAnimate(false); // Stop animation after 700ms
    }, 700);
    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].clientX;
    if (touchStartRef.current !== null && touchEndRef.current !== null) {
      const touchDiff = touchStartRef.current - touchEndRef.current;
      if (touchDiff > 50) {
        handleNext();
      } else if (touchDiff < -50) {
        handlePrevious();
      }
    }
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image display and buttons */}
      <div className="flex items-center justify-between h-64 bg-gray-200 rounded-lg overflow-hidden">
        {/* Previous Button */}
        <Button
          size="icon"
          className="hidden sm:flex bg-primary text-white p-2 rounded-full hover:bg-primary-foreground"
          onClick={handlePrevious}
        >
          <ChevronRight className="w-6 h-6 hover:text-primary" />
        </Button>

        {/* Image display with conditional animation */}
        <div className="flex-grow  h-full flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            key={currentIndex}
            className={`object-cover w-full h-full transition-opacity duration-700 ${
              animate ? "animate-fade-in" : ""
            }`}
          />
        </div>

        {/* Next Button */}
        <Button
          size="icon"
          className="hidden sm:flex bg-primary text-white p-2 rounded-full hover:bg-primary-foreground"
          onClick={handleNext}
        >
          <ChevronLeft className="w-6 h-6 hover:text-primary" />
        </Button>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-primary-foreground"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
