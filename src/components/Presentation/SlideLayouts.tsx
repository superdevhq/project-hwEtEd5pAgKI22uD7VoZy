
import React from "react";
import { cn } from "@/lib/utils";

// Title slide with optional subtitle
export const TitleSlide = ({ 
  title, 
  subtitle, 
  className 
}: { 
  title: React.ReactNode; 
  subtitle?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center h-full text-center", className)}>
      <h1 className="text-5xl font-bold tracking-tight mb-6">{title}</h1>
      {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

// Content slide with title and content
export const ContentSlide = ({ 
  title, 
  children,
  className 
}: { 
  title: React.ReactNode; 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      <div className="flex-1">{children}</div>
    </div>
  );
};

// Split slide with content on left and right
export const SplitSlide = ({ 
  title,
  left, 
  right,
  className 
}: { 
  title?: React.ReactNode;
  left: React.ReactNode; 
  right: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {title && <h2 className="text-3xl font-semibold mb-8">{title}</h2>}
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex-1">{left}</div>
        <div className="flex-1">{right}</div>
      </div>
    </div>
  );
};

// Image slide with optional caption
export const ImageSlide = ({ 
  title,
  image, 
  alt,
  caption,
  className 
}: { 
  title?: React.ReactNode;
  image: string; 
  alt: string;
  caption?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      {title && <h2 className="text-3xl font-semibold mb-6">{title}</h2>}
      <div className="flex-1 flex items-center justify-center">
        <figure className="max-h-[70vh]">
          <img 
            src={image} 
            alt={alt} 
            className="max-h-full max-w-full object-contain rounded-md" 
          />
          {caption && (
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
};

// List slide with bullet points
export const ListSlide = ({ 
  title, 
  items,
  ordered = false,
  className 
}: { 
  title: React.ReactNode; 
  items: React.ReactNode[];
  ordered?: boolean;
  className?: string;
}) => {
  const ListComponent = ordered ? 'ol' : 'ul';
  const listClass = ordered 
    ? "list-decimal pl-6 space-y-4" 
    : "list-disc pl-6 space-y-4";
  
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      <ListComponent className={listClass}>
        {items.map((item, index) => (
          <li key={index} className="text-xl">{item}</li>
        ))}
      </ListComponent>
    </div>
  );
};

// Quote slide
export const QuoteSlide = ({ 
  quote, 
  author,
  className 
}: { 
  quote: React.ReactNode; 
  author?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center h-full text-center", className)}>
      <blockquote className="text-3xl font-serif italic max-w-3xl mb-8">
        "{quote}"
      </blockquote>
      {author && <cite className="text-xl text-muted-foreground">— {author}</cite>}
    </div>
  );
};
