import React from "react";
import ReactDOM from "react-dom";

const Title = ({ deckSize, wrongCount, rightCount }) => {
  return (
    <div>
      <h1>Spongebob Trivia</h1>
      <h2>Are you a true Spogebob fan? Find out today!</h2>
      <h3>Deck Size: {deckSize}</h3>
      <div className="counts-div">
        <p>Wrong Count: {wrongCount}</p>
        <p>Right Count: {rightCount}</p>
      </div>
    </div>
  );
};

export default Title;
