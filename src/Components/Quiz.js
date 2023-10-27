import React, { useContext, useState } from "react";
import { Questions } from "./Helpers/Question";
import { QuickContext } from "./Helpers/Context";
function Quiz() {
  const { score, setscore, setgamestate } = useContext(QuickContext);

  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [OptionChosen, SetOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === OptionChosen) {
      setscore(score + 1);
    }
    SetcurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === OptionChosen) {
      setscore(score + 1);
    }
    setgamestate("Endscreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => SetOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => SetOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => SetOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => SetOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
