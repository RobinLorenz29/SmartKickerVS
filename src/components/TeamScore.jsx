// TeamScore.jsx – Holt den Score eines Teams vom Backend

import React, { useState, useEffect } from "react"

export default function TeamScore({ team }) {
  const [score, setScore] = useState(0)

  // Holt alle 1 Sek den State vom Backend
  useEffect(() => {
    const loadScore = async () => {
      try {
        const response = await fetch("http://localhost:7890/api/matches/current")
        const data = await response.json()

        // Score auslesen je nach Team
        if (team === "teamA") setScore(data.goalTeamA)
        if (team === "teamB") setScore(data.goalTeamB)

      } catch (error) {
        console.error("Score Fehler:", error)
      }
    }

    loadScore()
    const interval = setInterval(loadScore, 1000)
    return () => clearInterval(interval)
  }, [team])

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>{team === "teamA" ? "Team A" : "Team B"}</h2>
      <p style={{ fontSize: "40px" }}>{score}</p>
    </div>
  )
}