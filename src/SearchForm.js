import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
