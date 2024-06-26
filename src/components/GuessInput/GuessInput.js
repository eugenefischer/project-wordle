import React from "react";

function GuessInput({ gameStatus, makeGuess }) {
  const [text, setText] = React.useState("");
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          if (gameStatus !== "ACTIVE") {
            return;
          }
          const guess = { text: text, key: crypto.randomUUID() };
          makeGuess(guess);
          setText("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={text}
          pattern="[A-Z]{5,5}"
          onChange={(event) => {
            setText(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
