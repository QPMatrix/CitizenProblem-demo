import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

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
        // Swiped left to go next
        handleNext();
      } else if (touchDiff < -50) {
        // Swiped right to go previous
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
      {/* Image display */}
      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Previous Button (hidden on small screens) */}
      <Button
        size="icon"
        className="hidden sm:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={handlePrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      {/* Next Button (hidden on small screens) */}
      <Button
        size="icon"
        className="hidden sm:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={handleNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
