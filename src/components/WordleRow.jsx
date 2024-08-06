import React from "react";
import WordleCell from "./WordleCell";

function WordleRow({ guess, isCurrentRow, targetWord }) {
  const getLetterStatus = (letter, index) => {
    if (!letter) return "";

    if (letter === targetWord[index]) {
      return "correct";
    } else if (targetWord.includes(letter)) {
      return "present";
    } else {
      return "absent";
    }
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {guess.map((letter, index) => (
        <WordleCell
          key={index}
          letter={letter || ""}
          status={!isCurrentRow ? getLetterStatus(letter, index) : ""}
        />
      ))}
    </div>
  );
}

export default WordleRow;