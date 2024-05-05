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

  const [status, setStatus] = React.useState("ACTIVE");

  function makeGuess(guess) {
    console.log(guess);
    const nextGuesses = [...guesses];
    nextGuesses[numGuesses] = guess;
    setGuesses(nextGuesses);
    setNumGuesses(numGuesses + 1);
    if (guess.text === answer) {
      setStatus("SUCCESS");
    }
    if (guess.text !== answer && numGuesses + 1 === NUM_OF_GUESSES_ALLOWED) {
      setStatus("FAILURE");
    }
  }
  return (
    <>
      <GuessBoard answer={answer} guesses={guesses} />
      <GuessInput gameStatus={status} makeGuess={makeGuess} />
      {status === "SUCCESS" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {status === "FAILURE" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
