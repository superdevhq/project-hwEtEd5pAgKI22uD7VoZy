
import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">React Presentation Deck</h1>
        <p className="text-xl mb-8">A simple, elegant way to create presentations in React</p>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
          <p className="mb-4">This is a demonstration of a simple presentation framework.</p>
          <p>Currently showing a basic version to ensure you can see something on the screen.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
