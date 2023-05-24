import { useState, useEffect } from 'react';



const choices = ['rock', 'paper', 'scissors'];

const Logic= () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    const generateComputerChoice = () => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setComputerChoice(choices[randomIndex]);
    };

    if (userChoice !== '') {
      generateComputerChoice();
      determineResult();
    }
  }, [userChoice]);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  const determineResult = () => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setUserScore((prevScore) => prevScore + 1);
    } else {
      setResult('Computer wins!');
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const resetGame = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <button onClick={() => handleUserChoice('rock')}>Rock</button>
        <button onClick={() => handleUserChoice('paper')}>Paper</button>
        <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
      </div>
      {userChoice !== '' && (
        <div>
          <p>Your choice: {userChoice}</p>
          <p>Computers choice: {computerChoice}</p>
          <p>{result}</p>
          <p>Score:</p>
          <p>User: {userScore}</p>
          <p>Computer: {computerScore}</p>
          <button onClick={resetGame}>Reset</button>
        </div>
      )}
    </div>
  );
};


export default Logic