import React from "react";

function GuessBoard({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ text, key }) => (
        <p className="guess" key={key}>
          {text.split("").map((letter, index) => (
            <span className="cell" key={index}>
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessBoard;
