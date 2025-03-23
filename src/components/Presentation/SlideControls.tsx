
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  className?: string;
}

const SlideControls = ({
  onPrevious,
  onNext,
  currentSlide,
  totalSlides,
  className,
}: SlideControlsProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <div className="text-sm text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default SlideControls;
