
import PropTypes from "prop-types";

const Score = ({ score, playAgain }) => {
    return (
      <div>
        <h2>Score</h2>
        <div>
          <ul>
            <li>Player: {score.player}</li>
            <li>Computer: {score.computer}</li>
          </ul>
        </div>
        <div>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    );
  };
  // Score component ends
  
  Score.propTypes = {
    score: PropTypes.shape({
      player: PropTypes.number.isRequired,
      computer: PropTypes.number.isRequired,
    }).isRequired,
    playAgain: PropTypes.func.isRequired,
  };

  export default Score;
  