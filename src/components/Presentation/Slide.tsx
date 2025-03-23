
import React from "react";
import { cn } from "@/lib/utils";

export interface SlideProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const Slide = ({ id, className, children, isActive = false }: SlideProps) => {
  return (
    <div
      id={id}
      className={cn(
        "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none",
        className
      )}
      role="region"
      aria-label={`Slide ${id}`}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-6 py-12">{children}</div>
      </div>
    </div>
  );
};

export default Slide;
