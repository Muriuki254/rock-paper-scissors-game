import { useState } from "react";
import rulesImage from "../assets/image-rules.svg";

// Rules component: Displays the game rules image
const Rules = () => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
      <button onClick={toggleImage}>
        <img src={rulesImage} alt="Rules" />
      </button>
      {showImage && (
        <div className="rules-overlay">
          <div className="rules-image">
            <img src={rulesImage} alt="Rules" />
          </div>
          <button onClick={toggleImage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Rules;