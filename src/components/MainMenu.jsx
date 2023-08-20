import React, { useContext } from "react";

import { QuizContext } from "../Helper/Contexts";

const MainMenu = () => {
  const { setGameState, setUserName } = useContext(QuizContext);

  return (
    <div className="Menu">
      <input
        placeholder="Enter your name "
        required
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
