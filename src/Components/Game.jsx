import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Picks from "./Picks";
import Rules from "./Rules";
import Score from "./Score";
import Outcome from "./Outcome";

// Game component: Manages the game state and renders other components
// Starts
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
  
    // Randomly chooses a computer pick when the player makes a pick
    useEffect(() => {
      const randomPick = Math.floor(Math.random() * 3);
      const pickOptions = ["rock", "paper", "scissors"];
      const newComputerPick = pickOptions[randomPick];
      setComputerPick(newComputerPick);
    }, [pick]);
  
    // Updates the score based on the player's and computer's picks
    useEffect(() => {
      if (pick !== "") {
        const outcome = checkOutcome(pick, computerPick);
        setScore((prevScore) => {
          if (outcome === "Player Wins") {
            return { ...prevScore, player: prevScore.player + 1 };
          } else if (outcome === "Computer Wins") {
            return { ...prevScore, computer: prevScore.computer + 1 };
          } else {
            return prevScore; // Set score to zero for both sides
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
            <Route path="/" element={<Picks handlePick={handlePick} />} />
            <Route path="/outcome" element={<Outcome playerPick={pick} computerPick={computerPick} playAgain={playAgain} />} />
            
          </Routes>
          <Rules />
        </BrowserRouter>
         {/* <h2>Computer Pick</h2>
         <div>{computerPick}</div> */}
        
        
      
      </div>
    );
  };
  // Game component ends
  
  export default Game;