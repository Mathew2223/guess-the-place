import { useState } from 'react';
import './GameStart.css';
import PlayingGame from './GameProcess';
import { locations } from './Locations';

export default function GameStart() {
  let [processInGame, setProcessInGame] = useState('start'); // playing, finished
  const [indexOfLocation, setIndexOfLocation] = useState(0);
  let currentLocation = locations[indexOfLocation];
  let [score, setScore] = useState({ player: 0, computer: 0 });
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const isLastQuestion = indexOfLocation === locations.length - 1;
  const nextButtonText = isLastQuestion ? 'Посмотреть результат' : 'Следующая локация';

  const goToNextQuestion = () => {
    setIndexOfLocation(prev => prev + 1);
    setHasAnswered(false);
    setSelectedOption(null);
  }

  const resetGame = () => {
    setIndexOfLocation(0);
    setHasAnswered(false);
    setSelectedOption(null);
    setScore({ player: 0, computer: 0 });
    setProcessInGame('playing');
  }
  
  const handleVariantClick = (option) => {
    if (hasAnswered) return;

    const isCorrect = option === currentLocation.name;
    setSelectedOption(option);
    setHasAnswered(true);

    if (isCorrect) {
      setScore(prev => ({player: prev.player + 1, computer: prev.computer }));
    }
    else {
      setScore(prev => ({ player: prev.player, computer: prev.computer + 1 }));
    }
  }

  const onNextQuestion = () => {
    if (indexOfLocation + 1 < locations.length) {
      goToNextQuestion();
    }
    else {
      setProcessInGame('finished');
    }
  }

  if (processInGame === 'start') {
    return (
      <div className='main-menu'>
        <h1>Попробуешь угадать локацию?</h1>
        <h2>С каждой локацией уровень сложности будет повышаться</h2>
        <button className='start-button' onClick={() => setProcessInGame('playing')}>Камон чувак</button>
      </div>
    )
  }
  if (processInGame === 'finished') { 
    return (
      <div className="screen finish-screen">
        <h1>Игра окончена!</h1>
        <p>Ты угадал: {score.player} из {locations.length}</p>
        <button className="start-button" onClick={resetGame}>
          Играть снова
        </button>
      </div>
    )
  }
  return ( 
    <PlayingGame 
      currentLocation={currentLocation}
      score={score}
      hasAnswered={hasAnswered}
      selectedOption={selectedOption}
      handleVariantClick={handleVariantClick}
      onNextQuestion={onNextQuestion}
      nextButtonText={nextButtonText}
    />
  )
}