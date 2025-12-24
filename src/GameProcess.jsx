import { useState } from 'react';
import './GameProcess.css';
import img1 from './assets/images/img1.jpg';

export const locations = [
  {
    id: 1,
    name: 'Автоцентр',
    img: './assets/img1.jpg',
    options: ['магазин Атлант', 'К/Б', 'заправка Lukoil', 'Автоцентр', 'остановка "Школа"']
  }
]

export default function PlayingGame() {
  const [indexOfLocation, setIndexOfLocation] = useState(0);
  let currentLocation = locations[indexOfLocation];
  let [score, setScore] = useState({ player: 0, computer: 0 });
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleVariantClick = (option) => {
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

  const goToNextQuestion = () => {
    setIndexOfLocation(prev => prev + 1);
    setHasAnswered(false);
    setSelectedOption(null);
  }

  return (
    <section>
      <div className='base-header'>
        <h1>Где ты?</h1>
        <p>Счетчик: {score.player} (угадал) - {score.computer} (не угадал)</p>
        <button className='next-location'>Следующая локация</button>
      </div>
      <div className='game-menu'>
        <img className='location-images' src={img1} alt="broken car" />
        <div className='option-btns' name="guess-the-place" id="guessThePlace">
          {currentLocation.options.map((option, index) => {
            let backgroundColor = '#FFFFFF';
            if (hasAnswered) {
              if (option === currentLocation.name) {
                backgroundColor = '#73fe25';
              }
              else if (option === selectedOption) {
                backgroundColor = '#FF0033';
              }
            }
            
            return <button style={{color: 'black', backgroundColor: backgroundColor}} className='option-btn' onClick={() => handleVariantClick(option)} key={index} disabled={hasAnswered}>{option}</button>
          })}
      </div>
      </div>
    </section>
  )
}