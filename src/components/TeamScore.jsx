// Import von React und Hooks
import React, { useState, useEffect } from 'react'

// Zeigt den Score eines Teams an
export default function TeamScore({ team }) {
  const [score, setScore] = useState(0) // Aktueller Score

  // Lädt alle 1 Sekunde den Score vom Backend
  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/counter")
        const data = await response.json()
        setScore(data[team]) // Score für das richtige Team setzen
      } catch (error) {
        console.error("Fehler beim Laden des Scores:", error)
      }
    }

    fetchScore() // direkt beim Start
    const interval = setInterval(fetchScore, 1000) // alle 1 Sekunde

    return () => clearInterval(interval) // Aufräumen
  }, [team])

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>{team === "team1" ? "Team 1" : "Team 2"}</h2>
      <p style={{ fontSize: '40px' }}>{score}</p>
    </div>
  )
}