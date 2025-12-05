// WinnerPage.jsx – Zeigt Gewinner, Endstand und bietet Home-Button zum Reset

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function WinnerPage() {
  const navigate = useNavigate()

  // Lokale States für Gewinner und Endstand
  const [winner, setWinner] = useState("")
  const [scoreA, setScoreA] = useState(0)
  const [scoreB, setScoreB] = useState(0)
  const [duration, setDuration] = useState("00:00")

  // Lädt die finalen Daten vom Backend beim Laden der Seite
  useEffect(() => {
    const fetchFinalData = async () => {
      try {
        const response = await fetch("http://localhost:7890/api/matches/current")
        const data = await response.json()

        // Setzt Winner und Endstand
        setWinner(data.winner)
        setScoreA(data.goalTeamA)
        setScoreB(data.goalTeamB)
        setDuration(data.duration)
      } catch (err) {
        console.error("Fehler beim Laden der Gewinnerdaten:", err)
      }
    }

    fetchFinalData()
  }, [])

  // Wird ausgelöst, wenn Home-Button gedrückt wird
  const goHome = async () => {
    try {
      // Backend zurücksetzen, Spiel wird beendet und neu startbereit
      await fetch("http://localhost:7890/api/matches/current/reset", {
        method: "PUT"
      })
    } catch (err) {
      console.error("Reset Fehler:", err)
    }

    // Zur Startseite navigieren
    navigate("/")
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spiel beendet!</h1>

      {/* Gewinner anzeigen */}
      <h2>Gewonnen: {winner}</h2>

      {/*Gespielte Zeit anzeigen */}
      <p style={{fontSize: "25px" }}>Spielzeit: {duration}</p>

      {/* Endstand anzeigen */}
      <p style={{ fontSize: "30px" }}>Endstand: Team A {scoreA} : Team B {scoreB}</p>

      {/* Home-Button zum Reset */}
      <button onClick={goHome}>Home</button>
    </div>
  )
}