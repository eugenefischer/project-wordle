import React from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_LETTERS_IN_WORD } from "../../constants";

function GuessBoard({ answer, guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ text, key }) => {
        if (" ".repeat(NUM_OF_LETTERS_IN_WORD) === text) {
          return (
            <p className="guess" key={key}>
              {text.split("").map((letter, index) => (
                <span className="cell" key={index}>
                  {letter}
                </span>
              ))}
            </p>
          );
        } else {
          const result = checkGuess(text, answer);
          return (
            <p className="guess" key={key}>
              {result.map((entry, index) => (
                <span className={`cell ${entry.status}`} key={index}>
                  {entry.letter}
                </span>
              ))}
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessBoard;
