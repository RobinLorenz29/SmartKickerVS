// ResetButton – setzt Spiel zurück & geht zur Startseite

import React from "react"
import { useNavigate } from "react-router-dom"
import "../styles/ResetButton.css"

export default function ResetButton() {
  const navigate = useNavigate()

  const reset = async () => {
    try {
      // Backend-Reset aufrufen
      await fetch("http://localhost:7890/api/matches/current/reset", {
        method: "PUT"
      })
    } catch (err) {
      console.error("Reset Fehler:", err)
    }

    navigate("/") // zurück zur Startseite
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button className="btn-reset" onClick={reset}>Reset</button>
    </div>
  )
}