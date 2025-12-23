import { useState } from 'react';
import './GameStart.css';
import PlayingGame from './GameProcess';

export const locations = [
  {
    id: 1,
    name: 'Ломанная машина',
    img: './assets/img1.jpg',
    options: ['магазин Атлант', 'К/Б', 'заправка Lukoil', 'Автоцентр', 'остановка "Школа"']
  }
]

export default function GameStart() {
  // let countLocation = 1;
  // let [clientCheck, setCheck] = useState(0);
  // let [PKCheck, setPKCheck] = useState(0);

  let [processInGame, setProcessInGame] = useState('start'); // playing, finished

  return (
    <div className='main-menu'>
      {(processInGame === 'start') && 
      (
        <>
          <h1>Попробуешь угадать локацию?</h1>
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