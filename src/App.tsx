import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?🥺",
  "Really sure?",
  "Please😭",
  "Don't do this to me",
  "I'm gonna cry...🥲",
  "Just think about it",
  "Pleaseeeeee",
  "If you say no, I'll be really sad🫤",
  "Okay I'll stop asking",
  "Just kidding, PLS SAY YES",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay♡♡♡</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
          />

          <div>Please let me pass this class?</div>
          <div>
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "rgb(255, 163, 209)",
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              style={{ backgroundColor: "rgb(245, 103, 103)" }}
              className="noButton"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
