import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Outcome component: Determines the outcome of the game based on player's and computer's picks
// Starts
const Outcome = ({ playerPick, computerPick }) => {
    const [outcome, setOutcome] = useState("");
  
    useEffect(() => {
      if (playerPick && computerPick) {
        setOutcome(checkOutcome(playerPick, computerPick));
      }
    }, [playerPick, computerPick]);
  
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
  
    if (!playerPick || !computerPick) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Outcome</h2>
        <div>{outcome}</div>
        
      </div>

    );
  };
  // Outcome component ends
  
  Outcome.propTypes = { 
    playerPick: PropTypes.string.isRequired,
    computerPick: PropTypes.string.isRequired,
  };

  export default Outcome;