import React, { useContext } from "react";
import { QuickContext } from "./Helpers/Context";
import { Questions } from "./Helpers/Question";
import "../App.css";
function EndScreen() {
  const { score, setscore, setgamestate } = useContext(QuickContext);

  const restartQuiz = () => {
    setscore(0);
    setgamestate("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finshed</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
