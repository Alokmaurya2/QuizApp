import React, { useContext } from "react";
import { Questions } from "../Helper/QuestionBank";
import { QuizContext } from "../Helper/Contexts";
const EndScreen = () => {
  const { attempted, userName, score } = useContext(QuizContext);
  return (
    <div className="Result-Wrapper">
      <div className="outcome">
        <h2>Result</h2>
        <h2>
          You attempted : {attempted}/{Questions.length}
        </h2>
        <h2>Your score is : {score}</h2>
        <button className="btn-1">
          <a href="/">Play Again</a>
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
