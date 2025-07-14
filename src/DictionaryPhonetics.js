import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Phonetics({ keyword }) {
  const [phonetic, setPhonetic] = useState(null);

  useEffect(() => {
    if (!keyword) return;

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (!Array.isArray(response.data) || response.data.length === 0) {
          setPhonetic(null);
          return;
        }

        const entry = response.data[0];
        const phonetics = entry.phonetics || [];
        const firstText = phonetics.find((p) => p.text);
        const firstAudio = phonetics.find((p) => p.audio);
        const combined = {
          text: firstText?.text || "",
          audio: firstAudio?.audio || "",
        };

        setPhonetic(combined);
      })
      .catch((error) => {
        console.warn("Could not fetch phonetics:", error.message);
        setPhonetic(null);
      });
  }, [keyword]);

  return (
    <div className="Phonetic">
      {phonetic && (
        <p>
          {phonetic.text}{" "}
          {phonetic.audio && (
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">volume_up</span>
            </a>
          )}
        </p>
      )}
    </div>
  );
}
