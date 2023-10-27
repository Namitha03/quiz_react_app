import { useContext } from "react";
import { QuickContext } from "./Helpers/Context";
import "../App.css";

function MainMenu() {
  const { gamestate, setgamestate } = useContext(QuickContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setgamestate("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
