import React, { useState } from "react";
import "./App.css";

// Global array of quote objects
const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  // Arrow function + Math.random
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="quote-mark">❝</h2>

        <p className="quote-text">{quote.text}</p>
        <h4 className="quote-author">— {quote.author}</h4>

        <button className="btn" onClick={generateQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;