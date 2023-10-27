import { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuickContext } from "./Components/Helpers/Context";

function App() {
  const [gamestate, setgamestate] = useState("menu");
  const [score, setscore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuickContext.Provider
        value={{ gamestate, setgamestate, score, setscore }}
      >
        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "Endscreen" && <EndScreen />}
      </QuickContext.Provider>
    </div>
  );
}

export default App;
