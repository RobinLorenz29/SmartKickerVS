// Minus-Button für Team A

import React from "react"
import "../styles/TeamAMinusButton.css"

export default function TeamAMinusButton() {
  const decrease = async () => {
    try {
      await fetch("http://localhost:7890/api/matches/current/correct/teamA", {
        method: "PUT"
      })
    } catch (err) {
      console.error("TeamA - Fehler:", err)
    }
  }

  return <button className = "btn-teamA" onClick={decrease}>- Team A</button>
}

