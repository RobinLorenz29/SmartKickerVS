import React, { useState } from 'react'

// Komponenten importieren
import TeamScore from './components/TeamScore.jsx'
import ResetButton from './components/ResetButton.jsx'
import MatchTime from './components/MatchTime.jsx'
import TeamBMinusButton from './components/TeamBMinusButton.jsx'
import TeamAMinusButton from './components/TeamAMinusButton.jsx'

export default function App() {
  const [resetFlag, setResetFlag] = useState(false)

  // POST an Backend zum Score verringern
  const decreaseScore = async (team) => {
    try {
      const endpoint = team === "teamA" ? "http://localhost:7890/api/matches/current/correctteamA" : "http://localhost:7890/api/matches/current/correctteamB"
        await fetch(endpoint, {method: 'PUT'})
      } catch (err) {
        console.error("Fehler beim Senden:", err)
      }
  }

  // POST an Backend zum Reset
  const resetAll = async () => {
    try {
      await fetch("http://localhost:7890/api/matches/current/reset", { method: 'PUT' })
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
      <TeamScore team="teamA" resetFlag={resetFlag} />
      <TeamScore team="teamB" resetFlag={resetFlag} />

      {/* Minus-Buttons */}
      <TeamAMinusButton onClick={() => decreaseScore("teamA")} />
      <TeamBMinusButton onClick={() => decreaseScore("teamB")} />

      {/* Reset-Button */}
      <ResetButton onClick={resetAll} />
    </div>
  )
}