// ResetButton – setzt Spiel zurück & geht zur Startseite

import React from "react"
import { useNavigate } from "react-router-dom"

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
      <button onClick={reset}>Reset</button>
    </div>
  )
}