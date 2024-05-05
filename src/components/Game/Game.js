import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { NUM_OF_LETTERS_IN_WORD } from "../../constants";
import { range } from "../../utils";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = range(NUM_OF_GUESSES_ALLOWED).map((num) => ({
    text: " ".repeat(NUM_OF_LETTERS_IN_WORD),
    key: crypto.randomUUID()
  }));
  const [guesses, setGuesses] = React.useState(initialGuesses);

  const [numGuesses, setNumGuesses] = React.useState(0);

  function makeGuess(guess) {
    if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    console.log(guess);
    const nextGuesses = [...guesses];
    nextGuesses[numGuesses] = guess;
    setGuesses(nextGuesses);
    setNumGuesses(numGuesses + 1);
  }
  return (
    <>
      <GuessBoard guesses={guesses} />
      <GuessInput makeGuess={makeGuess} />
    </>
  );
}

export default Game;
