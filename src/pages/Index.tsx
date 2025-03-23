
import React from "react";
import { Link } from "react-router-dom";
import { Deck, Slide, TitleSlide, ContentSlide, ListSlide, QuoteSlide, ImageSlide, SplitSlide } from "@/components/Presentation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-background to-muted">
      <div className="absolute top-4 right-4 z-20">
        <Link to="/coding">
          <Button variant="outline" className="bg-background/80 backdrop-blur-sm">
            View Coding Deck
          </Button>
        </Link>
      </div>
      
      <Deck>
        <Slide id="welcome">
          <TitleSlide 
            title="React Presentation Deck" 
            subtitle="A simple, elegant way to create presentations in React" 
          />
        </Slide>

        <Slide id="features">
          <ContentSlide title="Key Features">
            <ListSlide 
              title="" 
              items={[
                "Fully responsive design",
                "Keyboard navigation (arrow keys)",
                "Multiple slide layouts",
                "Smooth transitions",
                "Customizable with Tailwind CSS"
              ]}
            />
          </ContentSlide>
        </Slide>
        
        <Slide id="quote">
          <QuoteSlide 
            quote="The best way to predict the future is to invent it." 
            author="Alan Kay"
          />
        </Slide>
        
        <Slide id="image-example">
          <ImageSlide 
            title="Visual Content"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Person working on a presentation"
            caption="Engage your audience with compelling visuals"
          />
        </Slide>
        
        <Slide id="split-content">
          <SplitSlide 
            title="Split Content"
            left={
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Left Column</h3>
                <p>Perfect for comparing concepts or showing before/after examples.</p>
                <p>Each side can contain any React components.</p>
              </div>
            }
            right={
              <div className="bg-primary/10 rounded-lg p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-medium mb-2">Right Column</p>
                  <p>Add code snippets, images, or any content here.</p>
                </div>
              </div>
            }
          />
        </Slide>
        
        <Slide id="thank-you">
          <TitleSlide 
            title="Thank You!" 
            subtitle="Navigate with arrow keys or the controls below"
          />
        </Slide>
      </Deck>
    </div>
  );
};

export default Index;
