// ScorePage.jsx – Zeigt Scores, Buttons, MatchTime und überwacht Spielstatus

import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TeamScore from "../components/TeamScore.jsx"
import TeamAMinusButton from "../components/TeamAMinusButton.jsx"
import TeamBMinusButton from "../components/TeamBMinusButton.jsx"
import ResetButton from "../components/ResetButton.jsx"
import MatchTime from "../components/MatchTime.jsx"

export default function ScorePage() {
  const navigate = useNavigate()

  // Überwacht den Spielstatus alle 1 Sekunde
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("http://localhost:7890/api/matches/current")
        const data = await response.json()

        // Wenn Match beendet, zur Gewinnerseite wechseln
        if (data.status === "FINISHED") {
          navigate("/winner", { state: { winner: data.winner, scoreA: data.goalTeamA, scoreB: data.goalTeamB } })
        }
      } catch (err) {
        console.error("Fehler beim Abrufen des Matchstatus:", err)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SmartKicker Scoreboard</h1>

      {/* Match-Zeit */}
      <MatchTime />

      {/* Zeigt die Scores */}
      <TeamScore team="teamA" />
      <TeamScore team="teamB" />

      {/* Minus-Buttons für beide Teams */}
      <TeamAMinusButton />
      <TeamBMinusButton />

      {/* Reset-Button */}
      <ResetButton />
    </div>
  )
}