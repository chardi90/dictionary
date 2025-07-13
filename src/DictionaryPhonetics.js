import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Phonetics({ keyword }) {
  const [phonetics, setPhonetics] = useState([]);

  useEffect(() => {
    if (!keyword) return;

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (!Array.isArray(response.data) || response.data.length === 0) {
          setPhonetics([]);
          return;
        }

        const entry = response.data[0];

        if (entry.phonetics && entry.phonetics.length > 0) {
          const validPhonetics = entry.phonetics.filter(
            (p) => p.text || p.audio
          );
          setPhonetics(validPhonetics);
        } else {
          setPhonetics([]);
        }
      })
      .catch((error) => {
        console.warn("Could not fetch phonetics:", error.message);
        setPhonetics([]);
      });
  }, [keyword]);

  return (
    <div className="Phonetic">
      {phonetics.map((phonetic, index) => (
        <p key={index}>
          {phonetic.text}{" "}
          {phonetic.audio && (
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              🔊
            </a>
          )}
        </p>
      ))}
    </div>
  );
}
