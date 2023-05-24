import PropTypes from "prop-types";
// Picks component: Allows the player to choose their pick (rock, paper, or scissors)
// Starts
const Picks = ({ handlePick }) => {
    return (
      <div>
        <h2>Your Pick</h2>
        <div>
          <button onClick={() => handlePick("rock")}>Rock</button>
          <button onClick={() => handlePick("paper")}>Paper</button>
          <button onClick={() => handlePick("scissors")}>Scissors</button>
        </div>
      </div>
    );
  };
  // Picks component ends
  
  Picks.propTypes = {
    handlePick: PropTypes.func.isRequired,
  };
  
  export default Picks;