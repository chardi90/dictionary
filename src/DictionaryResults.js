import React from "react";
import "./DictionaryResults.css";
import Meanings from "./DictionaryMeanings";
import Phonetics from "./DictionaryPhonetics";
import DictionaryImages from "./DictionaryImages";

export default function Dictionary(props) {
  const results = props.results;
  const photos = props.photos;

  if (!props.results) return null;

  const groupedMeanings = {};

  results.meanings.forEach((meaning) => {
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
      <div className="word-heading">
        <h1 className="text-center">{results.word}</h1>
      </div>
      <div className="part-of-speech">
        <h2 className="text-center text-capitalize">{partsOfSpeechList}</h2>
        <div className="text-center">
          <Phonetics keyword={results.word} />
        </div>
      </div>
      {Object.keys(groupedMeanings).map((part, index) => (
        <div key={index}>
          <Meanings partOfSpeech={part} meanings={groupedMeanings[part]} />
        </div>
      ))}
      <DictionaryImages images={photos} />
    </div>
  );
}
