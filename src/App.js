import React, { useState } from "react";
import "./App.css";
import WordOfTheDay from "./WordOfDay";
import SearchForm from "./SearchForm.js";
import Dictionary from "./DictionaryResults.js";

export default function App() {
  const [results, setResults] = useState(null);

  function handleResults(data) {
    setResults(data);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchForm onResults={handleResults} />
        </header>

        <main>
          {!results && (
            <>
              <div>
                <div className="Dictionary-title">
                  <h1 className="text-center">Dictionary</h1>
                  <h2 className="text-center">Knowledge at your fingertips!</h2>
                </div>
                <WordOfTheDay />
              </div>
            </>
          )}
          <Dictionary results={results} />
        </main>

        <footer>
          Coded by{" "}
          <a
            href="https://chardi-portfolio.netlify.app/"
            alt="Chardi Portfolio"
            rel="noreferrer"
          >
            Chardi
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
