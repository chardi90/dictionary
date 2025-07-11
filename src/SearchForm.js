import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    const apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="search-form" onSubmit={search}>
      <input
        type="search"
        onChange={handleKeywordChange}
        value={keyword}
        autoFocus={true}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
