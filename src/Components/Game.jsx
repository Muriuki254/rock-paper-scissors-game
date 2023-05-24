import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Picks from "./Picks";
import Rules from "./Rules";
import Score from "./Score";
import Outcome from "./Outcome";

const Game = () => {
  const [pick, setPick] = useState("");
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });
  const [computerPick, setComputerPick] = useState("");

  const handlePick = (pick) => {
    setPick(pick);
  };

  const playAgain = () => {
    setPick("");
    setScore({
      player: 0,
      computer: 0,
    });
  };

  useEffect(() => {
    const randomPick = Math.floor(Math.random() * 3);
    const pickOptions = ["rock", "paper", "scissors"];
    const newComputerPick = pickOptions[randomPick];
    setComputerPick(newComputerPick);
  }, [pick]);

  useEffect(() => {
    if (pick !== "") {
      const outcome = checkOutcome(pick, computerPick);
      setScore((prevScore) => {
        if (outcome === "Player Wins") {
          return { ...prevScore, player: prevScore.player + 1 };
        } else if (outcome === "Computer Wins") {
          return { ...prevScore, computer: prevScore.computer + 1 };
        } else {
          return { player: 0, computer: 0 }; // Reset scores to zero for both sides
        }
      });
    }
  }, [pick, computerPick]);

  const checkOutcome = (playerPick, computerPick) => {
    const results = {
      rock: {
        rock: "Tie",
        paper: "Computer Wins",
        scissors: "Player Wins",
      },
      paper: {
        rock: "Player Wins",
        paper: "Tie",
        scissors: "Computer Wins",
      },
      scissors: {
        rock: "Computer Wins",
        paper: "Player Wins",
        scissors: "Tie",
      },
    };

    if (playerPick === computerPick) {
      return "Tie";
    } else {
      return results[playerPick][computerPick];
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Score score={score}  />
        <Routes>
          <Route
            path="/"
            element={<Picks handlePick={handlePick} />}
          />
          <Route
            path="/outcome"
            element={
              <Outcome 
                playerPick={pick}
                computerPick={computerPick}
                playAgain={playAgain}
              />
            }
          />
        </Routes>
        <Rules />
      </BrowserRouter>
    </div>
  );
};

export default Game;
