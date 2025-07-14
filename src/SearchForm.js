import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm(props) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(function (response) {
      props.onResults({ dictionary: response.data });
    });

    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photosApiUrl).then(function (response) {
      props.onResults({ photos: response.data });
    });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="search"
          placeholder="Search..."
          onChange={handleKeywordChange}
          value={keyword}
          autoFocus
        />
      </div>
      <input type="submit" value="Search" />
    </form>
  );
}
