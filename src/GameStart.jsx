import { useState } from 'react';
import './GameStart.css';
import PlayingGame from './GameProcess';

export default function GameStart() {
  let [processInGame, setProcessInGame] = useState('start'); // playing, finished

  return (
    <div className='main-menu'>
      {(processInGame === 'start') && 
      (
        <>
          <h1>Попробуешь угадать локацию?</h1>
          <h2>С каждой локацией уровень сложности будет повышаться</h2>
          <button className='start-button' onClick={() => setProcessInGame('playing')}>Камон чувак</button>
        </>
      )}
      {(processInGame === 'playing') &&
      (
        <PlayingGame />
      )}
      {(processInGame === 'finished') &&
      (
        setProcessInGame('finished')
      )}
    </div>
  )
}