
// Rules component: Displays a button to show the game rules
// Starts
const Rules = () => {
    const showRules = () => {
      alert("Paper beats rock, rock beats scissors, scissors beat paper.");
    };
  
    return (
      <div>
        <button onClick={showRules}>Show Rules</button>
      </div>
    );
  };
  // Rules component ends

  export default Rules;