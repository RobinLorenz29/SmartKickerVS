import React, { useState } from 'react'

// Komponenten importieren
import TeamScore from './components/TeamScore.jsx'
import Team1MinusButton from './components/Team1MinusButton.jsx'
import Team2MinusButton from './components/Team2MinusButton.jsx'
import ResetButton from './components/ResetButton.jsx'
import MatchTime from './components/MatchTime.jsx'

export default function App() {
  const [resetFlag, setResetFlag] = useState(false)

  // POST an Backend zum Score verringern
  const decreaseScore = async (team) => {
    try {
      await fetch(`http://localhost:5173/api/decrease/${team}`, { method: 'POST' })
    } catch (err) {
      console.error("Fehler beim Senden:", err)
    }
  }

  // POST an Backend zum Reset
  const resetAll = async () => {
    try {
      await fetch("http://localhost:5173/api/reset", { method: 'POST' })
      setResetFlag(!resetFlag) // Optionale Frontend-Reset-Flag
    } catch (err) {
      console.error("Fehler beim Reset:", err)
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>SmartKicker Scoreboard</h1>

      {/* Match-Zeit */}
      <MatchTime />

      {/* Scores */}
      <TeamScore team="team1" resetFlag={resetFlag} />
      <TeamScore team="team2" resetFlag={resetFlag} />

      {/* Minus-Buttons */}
      <Team1MinusButton onClick={() => decreaseScore("team1")} />
      <Team2MinusButton onClick={() => decreaseScore("team2")} />

      {/* Reset-Button */}
      <ResetButton onClick={resetAll} />
    </div>
  )
}