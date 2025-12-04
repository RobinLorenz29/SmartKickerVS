// Import von React und Hooks
import React, { useState, useEffect } from 'react'

// Zeigt den Score eines Teams an
export default function TeamScore({ team, resetFlag }) {
  const [score, setScore] = useState(0) // Aktueller Score

  // Lädt alle 1 Sekunde den Score vom Backend
  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch("http://localhost:7890/api/matches/current")
        const data = await response.json()
        setScore(team === "teamA" ? data.goalTeamA : data.goalTeamB) // Score für das richtige Team setzen
      } catch (error) {
        console.error("Fehler beim Laden des Scores:", error)
      }
    }

    fetchScore() // direkt beim Start
    const interval = setInterval(fetchScore, 1000) // alle 1 Sekunde

    return () => clearInterval(interval) // Aufräumen
  }, [team])

  // Score zurücksetzen, wenn resetFlag sich ändert
  useEffect(() => {
    setScore(0)
  }, [resetFlag])

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>{team === "teamA" ? "Team A" : "Team B"}</h2>
      <p style={{ fontSize: '40px' }}>{score}</p>
    </div>
  )
}