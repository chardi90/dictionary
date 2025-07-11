import React from "react";

export default function Meanings({ partOfSpeech, meanings }) {
  return (
    <div className="Meaning">
      <h3>{partOfSpeech}</h3>
      <ol>
        {meanings.map((entry, i) => (
          <li key={i}>
            {entry.definition}
            {entry.example && (
              <ul>
                <li>
                  <em>{entry.example}</em>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
