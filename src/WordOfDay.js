import React, { useEffect, useState } from "react";
import axios from "axios";

const RANDOM_WORDS = [
  "ephemeral",
  "sonder",
  "effervescent",
  "limerence",
  "serendipity",
  "susurrus",
  "sonder",
  "numinous",
  "bombinate",
  "petrichor",
  "lullaby",
  "brouhaha",
  "halcyon",
  "lagom",
  "mellifluous",
  "umbra",
  "zephyr",
  "quixotic",
  "iridescent",
  "wanderlust",
  "flummox",
  "chatoyant",
  "cromulent",
  "obfuscate",
  "kerfuffle",
  "bibliophile",
  "snollygoster",
  "palimpsest",
  "defenestrate",
  "lucent",
  "raconteur",
  "fiddle-faddle",
  "gobsmacked",
  "coddiwomple",
  "absquatulate",
];

export default function WordOfTheDay() {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    const fallbackWord = "discombobulate";

    const fetchWordData = (word) => {
      const apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          if (Array.isArray(data.meanings) && data.meanings.length > 0) {
            setWordData(data);
          } else if (word !== fallbackWord) {
            fetchWordData(fallbackWord);
          } else {
            console.warn("Fallback word also failed:", data);
          }
        })
        .catch((error) => {
          if (word !== fallbackWord) {
            fetchWordData(fallbackWord);
          } else {
            console.error("Both primary and fallback word failed:", error);
          }
        });
    };

    const randomWord =
      RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

    fetchWordData(randomWord);
  }, []);

  if (
    !wordData ||
    !Array.isArray(wordData.meanings) ||
    wordData.meanings.length === 0
  ) {
    return null;
  }

  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const firstMeaning = wordData.meanings[0];
  const partOfSpeech = firstMeaning?.partOfSpeech || "";
  const definition = firstMeaning?.definition || "";
  const example = firstMeaning?.example || "";
  const phonetic = wordData.phonetic || "";

  return (
    <div className="word-of-day">
      <div className="day-wrapper">
        <h5>Word of the Day</h5>
        <p>{date}</p>
        <h6>{wordData.word}</h6>
        <p>
          <em>{partOfSpeech}</em> | {phonetic}
        </p>
        <div className="word-wrapper">
          <h2>Meaning</h2>
          <div>
            <strong>{definition}</strong>
            <div>{example && ` ~ ${example}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
