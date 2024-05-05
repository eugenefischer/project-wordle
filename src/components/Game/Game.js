import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function makeGuess(guess) {
    console.log(guess);
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <GuessBoard guesses={guesses} />
      <GuessInput makeGuess={makeGuess} />
    </>
  );
}

export default Game;
