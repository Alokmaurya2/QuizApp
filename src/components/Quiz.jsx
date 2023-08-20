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
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("B");
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("C");
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setChoosenAnswere("D");
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} className="btn">
          Finsih
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
