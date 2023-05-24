import PropTypes from "prop-types";
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import { Link } from "react-router-dom";
import '../App.css'

const Outcome = ({ playerPick, computerPick, playAgain }) => {
  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  const getOutcomeText = () => {
    if (playerPick === computerPick) {
      return "It's a Tie🤞!";
    } else if (
      (playerPick === "rock" && computerPick === "scissors") ||
      (playerPick === "paper" && computerPick === "rock") ||
      (playerPick === "scissors" && computerPick === "paper")
    ) {
      return "You Win🎉!";
    } else {
      return "You Lose 🙃!";
    }
  };

  return (
    <>
    <div className="label">
    <label className="picked-label">You Picked:</label>
    <label className="picked-label">The Computer Picked:</label>
    </div>
    <div className="outcome">
      <div className="outcome-icons">
        <div className="player-icon">
          
          <img src={icons[playerPick]} alt="" />
        </div>
        <div className="outcome-label">
        <label className="outcome-text">{getOutcomeText()}</label>
        <Link to="/">
        <button onClick={playAgain}>Play Again</button>
        </Link>
        </div>
        
        <div className="computer-icon">
        
          <img src={icons[computerPick]} alt="" />
        </div>
        
      </div>
    </div>
    </>
  );
};

Outcome.propTypes = {
  playerPick: PropTypes.string.isRequired,
  computerPick: PropTypes.string.isRequired,
  playAgain: PropTypes.func.isRequired,
};

export default Outcome;