import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm(props) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(function (response) {
      props.onResults(response.data);
    });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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
