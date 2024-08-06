import React, { useState } from "react";
import WordleGrid from "./components/WordleGrid";
import Keyboard from "./components/Keyboard";

function App() {
  const targetWord = "ANVIL"; // The word to guess
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(Array(5).fill("")));
  const [rowIndex, setRowIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [letterStatus, setLetterStatus] = useState({});

  // console.log("currentGuess :",currentGuess);
  // console.log("guesses : ",guesses);
  // console.log("rowIndex : " ,rowIndex);
  // console.log("gameOver : " , gameOver);
  // console.log("message : " ,message);
  // console.log("letterStatus : " ,letterStatus);

  const handleSubmit = () => {

    if(currentGuess.length !== 5){
      return;
    }
    if(gameOver)
    {
      return;
    }

      const newGuesses = guesses.map((guess, idx) =>
        idx === rowIndex ? currentGuess.split("") : guess
      );


      setGuesses(newGuesses);
      // console.log(currentGuess)
      updateLetterStatus(currentGuess);

      if (currentGuess === targetWord) {
        setGameOver(true);
        setMessage("Congratulations! You've guessed the word!");
      } else if (rowIndex === 5) {
        setGameOver(true);
        setMessage(`Game Over! The word was ${targetWord}.`);
      }

      setRowIndex((prev) => prev + 1);
      setCurrentGuess("");
  };

  const updateLetterStatus = (guess) => {
    const updatedStatus = { ...letterStatus };
    // console.log(updatedStatus);
    guess.split("").forEach((letter, index) => {
      if (letter === targetWord[index]) {
        updatedStatus[letter] = "correct";
      } else if (targetWord.includes(letter)) {
        updatedStatus[letter] = updatedStatus[letter] !== "correct" ? "present" : "correct";
      } else {
        updatedStatus[letter] =
          updatedStatus[letter] !== "correct" && updatedStatus[letter] !== "present" ? "absent" : updatedStatus[letter];
      }
    });

    setLetterStatus(updatedStatus);
  };

  const handleKeyPress = (key) => {
    if (gameOver) return;

    if (key === "ENTER") {
      handleSubmit();
    } else if (key === "DELETE") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Wordle Game</h1>
      <WordleGrid
        guesses={guesses}
        targetWord={targetWord}
        currentGuess={currentGuess}
        rowIndex={rowIndex}
      />
      {message && <div className="text-lg font-semibold mb-4">{message}</div>}
      {!gameOver && (
        <Keyboard handleKeyPress={handleKeyPress} letterStatus={letterStatus} />
      )}
    </div>
  );
}

export default App;