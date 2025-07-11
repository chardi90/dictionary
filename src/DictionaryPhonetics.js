import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Phonetics({ keyword }) {
  const [phonetic, setPhonetic] = useState(null);

  useEffect(() => {
    if (!keyword) return;

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then((response) => {
      const entry = response.data[0];

      if (entry.phonetics && entry.phonetics.length > 0) {
        const withAudio =
          entry.phonetics.find((p) => p.audio) || entry.phonetics[0];
        setPhonetic(withAudio);
      }
    });
  }, [keyword]);

  if (!phonetic) return null;

  return (
    <p className="Phonetic">
      {phonetic.text}{" "}
      {phonetic.audio && (
        <a href={phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
      )}
    </p>
  );
}
