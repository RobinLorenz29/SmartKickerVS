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
          navigate("/winner")
        }
      } catch (err) {
        console.error("Fehler beim Abrufen des Matchstatus:", err)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <div className="score-page">
      {/* Header: Titel + Match-Zeit */}
      <header className="score-header">
        <h1>SmartKicker</h1>
        <MatchTime />
      </header>

      {/* Main: Team A links, Doppelpunkt mittig, Team B rechts */}
      <main className="score-main">
        {/* Team A */}
        <div className="team team-left">
          <h2>Team A</h2>
          <div className="score-box">
            <TeamScore team="teamA" />
          </div>
          <TeamAMinusButton />
        </div>

        {/* Doppelpunkt */}
        <div className="score-divider">:</div>

        {/* Team B */}
        <div className="team team-right">
          <h2>Team B</h2>
          <div className="score-box">
            <TeamScore team="teamB" />
          </div>
          <TeamBMinusButton />
        </div>
      </main>

      {/* Footer: Reset-Button */}
      <footer className="score-footer">
        <ResetButton />
      </footer>
    </div>
  )
}