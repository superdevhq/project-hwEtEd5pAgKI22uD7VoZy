
import React from "react";
import { Deck, Slide, TitleSlide, ContentSlide, ListSlide, CodeSlide } from "@/components/Presentation";

const CodingDeck = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-background to-muted">
      <Deck>
        <Slide id="welcome">
          <TitleSlide 
            title="Coding with React" 
            subtitle="A guide to modern React development" 
          />
        </Slide>

        <Slide id="react-features">
          <ContentSlide title="Modern React Features">
            <ListSlide 
              title="" 
              items={[
                "Functional Components",
                "React Hooks",
                "Context API",
                "Suspense and Concurrent Mode",
                "Server Components"
              ]}
            />
          </ContentSlide>
        </Slide>

        <Slide id="hooks-example">
          <CodeSlide 
            title="React Hooks Example"
            language="jsx"
            code={`import React, { useState, useEffect } from 'react';

function Counter() {
  // State hook
  const [count, setCount] = useState(0);
  
  // Effect hook
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    // Cleanup function
    return () => {
      document.title = 'React App';
    };
  }, [count]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
            caption="A simple counter component using useState and useEffect hooks"
          />
        </Slide>

        <Slide id="context-example">
          <CodeSlide 
            title="Context API Example"
            language="jsx"
            code={`import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 15px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      Toggle Theme
    </button>
  );
}`}
            caption="Using Context API to manage theme across components"
          />
        </Slide>

        <Slide id="thank-you">
          <TitleSlide 
            title="Happy Coding!" 
            subtitle="Navigate with arrow keys or the controls below"
          />
        </Slide>
      </Deck>
    </div>
  );
};

export default CodingDeck;
