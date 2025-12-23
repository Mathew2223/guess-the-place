import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameStart from './GameStart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameStart />
  </StrictMode>,
)
