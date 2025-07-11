import React, { useState } from "react";
import "./App.css";
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
              <h1 className="text-center">Dictionary</h1>
              <h2 className="text-center">Knowledge at your fingertips!</h2>
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
