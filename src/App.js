import React, { useState } from "react";
import "./App.css";
import WordOfTheDay from "./WordOfDay";
import SearchForm from "./SearchForm.js";
import Dictionary from "./DictionaryResults.js";

export default function App() {
  const [dictionaryResults, setDictionaryResults] = useState(null);
  const [photoResults, setPhotoResults] = useState(null);

  function handleResults(data) {
    if (data.dictionary) {
      setDictionaryResults(data.dictionary);
    }
    if (data.photos) {
      setPhotoResults(data.photos);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchForm onResults={handleResults} />
        </header>

        <main>
          {!dictionaryResults && (
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
          {dictionaryResults && (
            <Dictionary results={dictionaryResults} photos={photoResults} />
          )}
        </main>

        <footer>
          <div className="row">
            <div className="col-5 d-e">
              Coded by{" "}
              <a
                href="https://chardi-portfolio.netlify.app/"
                alt="Chardi Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Chardi
              </a>{" "}
            </div>
            <div className="col-2">|</div>
            <div className="col-5 d-s">
              <a
                href="https://github.com/chardi90/dictionary"
                alt="Chardi GitHub Code"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              open-sourced{" "}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
