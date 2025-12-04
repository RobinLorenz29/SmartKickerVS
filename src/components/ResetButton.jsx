// ResetButton – setzt Spiel zurück & geht zur Startseite

import React from "react"
import { useNavigate } from "react-router-dom"

export default function ResetButton() {
  const navigate = useNavigate()

  const reset = async () => {
    try {
      await fetch("http://localhost:7890/api/matches//current/reset", {
        method: "POST"
      })
    } catch (err) {
      console.error("Reset Fehler:", err)
    }

    navigate("/") // zurück zur Startseite
  }

  return <button onClick={reset}>Reset</button>
}