import React, { useContext, useState } from "react";
import { Questions } from "../Helper/QuestionBank";
import { QuizContext } from "../Helper/Contexts";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [ChoosenAnswere, setChoosenAnswere] = useState("");
  const { attempted, setAttempted, score, setScore, setGameState } =
    useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === ChoosenAnswere) {
      setScore(score + 1);
    }
    if (ChoosenAnswere !== "") {
      setAttempted(attempted + 1);
    }
    setChoosenAnswere("");
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answere === ChoosenAnswere) {
      setScore(score + 1);
    }

    if (ChoosenAnswere !== "") {
      setAttempted(attempted + 1);
    }
    setGameState("endscreen");
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currQuestion].prompt}</h2>
      <div className="options">
        <button
          onClick={() => {
            setChoosenAnswere("A");
          }}
          className={ChoosenAnswere === "A" ? "selected" : ""}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("B");
          }}
          className={ChoosenAnswere === "B" ? "selected" : ""}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("C");
          }}
          className={ChoosenAnswere === "C" ? "selected" : ""}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("D");
          }}
          className={ChoosenAnswere === "D" ? "selected" : ""}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="btn">
          Finish
        </button>
      ) : (
        <button onClick={nextQuestion} className="btn">
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
