import React from "react";

export default function Meanings({ partOfSpeech, meanings }) {
  const synonyms = meanings
    .flatMap((entry) => entry.synonyms || [])
    .filter(Boolean)
    .join(", ");

  return (
    <div className="Meaning">
      <h3>{partOfSpeech}</h3>
      <ol>
        {meanings.map((entry, i) =>
          entry.definitions?.map((def, j) => (
            <li key={`${i}-${j}`}>
              {def.definition}
              {def.example && (
                <ul>
                  <li>
                    <em>{def.example}</em>
                  </li>
                </ul>
              )}
            </li>
          ))
        )}
      </ol>
      {synonyms && <p>Synonyms: {synonyms}</p>}
    </div>
  );
}
