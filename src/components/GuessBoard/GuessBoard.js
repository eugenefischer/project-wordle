import React from "react";

function GuessBoard({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ text, key }) => (
        <p key={key}>{text}</p>
      ))}
    </div>
  );
}

export default GuessBoard;
