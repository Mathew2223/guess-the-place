import { useContext } from "react";
import { GameProcessContext } from "./GameProcessContext";

export default function Home() {
    const { setProcessInGame } = useContext(GameProcessContext);
    
    return (
        <div className='main-menu'>
            {/* <h1>Hi ${user.name}!</h1> */}
            <h2>Попробуешь угадать локацию?</h2>
            <h2>С каждой локацией уровень сложности будет повышаться</h2>
            <button className='start-button' onClick={() => setProcessInGame('playing')}>Камон чувак</button>
        </div>
    )
}