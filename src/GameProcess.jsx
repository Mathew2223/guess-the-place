import './GameProcess.css';
import { useState } from 'react';

export default function PlayingGame({
  currentLocation,
  score,
  selectedOption,
  hasAnswered,
  handleVariantClick,
  onNextQuestion,
  nextButtonText
}) {
  return (
    <section>
      <div className='game-screen'>
        <div className='base-header'>
          <h1>Где ты?</h1>
          <p>Счетчик: {score.player} (угадал) - {score.computer} (не угадал)</p>
          <button className='next-location' onClick={onNextQuestion} disabled={!hasAnswered}>{nextButtonText}</button>
        </div>
        <div className='game-menu'>
          <img id={currentLocation.id} className='location-images' src={currentLocation.img} alt={currentLocation.alt} />
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
            }
          )}
          </div>
        </div>
      </div>
    </section>
  )
}
