import React from "react";
import WordleRow from "./WordleRow";

function WordleGrid({ guesses, currentGuess, rowIndex, targetWord }) {
  // console.log(rowIndex);
  return (
    <div className="grid grid-rows-6 gap-4 mb-8">
      
      {guesses.map((guess, index) => {
        // If it's the current row, display the current guess

        // console.log( index , guess , rowIndex , currentGuess)

        const subString =  ((currentGuess+ "     ").substring(0,5));


        const guessToShow = index === rowIndex ? subString.split("") : guess;

        return (
          <WordleRow
            key={index}
            guess={guessToShow}
            targetWord={targetWord}
            isCurrentRow={index === rowIndex}
          />
        );
      })}
    </div>
  );
}

export default WordleGrid;