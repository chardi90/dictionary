import React from "react";
import Meanings from "./DictionaryMeanings";

export default function Dictionary(props) {
  if (!props.results) return null;

  const groupedMeanings = props.results.meanings.reduce((acc, meaning) => {
    const part = meaning.partOfSpeech;

    if (!acc[part]) {
      acc[part] = [];
    }

    acc[part].push(meaning);
    return acc;
  }, {});

  return (
    <div className="Dictionary">
      <h1>{props.results.word}</h1>
      <p>{props.results.phonetic}</p>
      {Object.keys(groupedMeanings).map((part, index) => (
        <div key={index}>
          <Meanings partOfSpeech={part} meanings={groupedMeanings[part]} />
        </div>
      ))}
    </div>
  );
}
