import React from "react";
import Meanings from "./DictionaryMeanings";

export default function Dictionary(props) {
  if (!props.results) return null;

  const groupedMeanings = {};

  props.results.meanings.forEach((meaning) => {
    const part = meaning.partOfSpeech;

    if (!groupedMeanings[part]) {
      groupedMeanings[part] = [];
    }

    groupedMeanings[part].push({
      definitions: [
        {
          definition: meaning.definition,
          example: meaning.example,
        },
      ],
      synonyms: meaning.synonyms || [],
    });
  });

  const partsOfSpeechList = [
    ...new Set(props.results.meanings.map((m) => m.partOfSpeech)),
  ].join(", ");

  return (
    <div className="Dictionary">
      <h1>{props.results.word}</h1>
      <h2>{partsOfSpeechList}</h2>
      <p>{props.results.phonetic}</p>
      {Object.keys(groupedMeanings).map((part, index) => (
        <div key={index}>
          <Meanings partOfSpeech={part} meanings={groupedMeanings[part]} />
        </div>
      ))}
    </div>
  );
}
