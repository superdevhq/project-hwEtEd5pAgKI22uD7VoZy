
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import SlideControls from "./SlideControls";
import Slide, { SlideProps } from "./Slide";

interface DeckProps {
  children: React.ReactElement<SlideProps>[];
  className?: string;
  controlsClassName?: string;
  showControls?: boolean;
  initialSlide?: number;
  onSlideChange?: (slideIndex: number) => void;
}

const Deck = ({
  children,
  className,
  controlsClassName,
  showControls = true,
  initialSlide = 0,
  onSlideChange,
}: DeckProps) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const slides = React.Children.toArray(children) as React.ReactElement<SlideProps>[];
  
  const goToSlide = useCallback((index: number) => {
    const newIndex = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentSlide(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
  }, [slides.length, onSlideChange]);

  const goToNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-background", className)}>
      {slides.map((slide, index) => {
        return React.cloneElement(slide, {
          key: slide.props.id || `slide-${index}`,
          isActive: index === currentSlide,
        });
      })}
      
      {showControls && (
        <div className={cn("absolute bottom-4 left-0 right-0 flex justify-center", controlsClassName)}>
          <SlideControls
            onPrevious={goToPrevious}
            onNext={goToNext}
            currentSlide={currentSlide}
            totalSlides={slides.length}
            className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default Deck;
