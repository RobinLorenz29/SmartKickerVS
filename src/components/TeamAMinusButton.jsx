// Minus-Button für Team A

import React from "react"

export default function TeamAMinusButton() {
  const decrease = async () => {
    try {
      await fetch("http://localhost:7890/api/matches/current/correct/teamA", {
        method: "POST"
      })
    } catch (err) {
      console.error("TeamA - Fehler:", err)
    }
  }

  return <button onClick={decrease}>- Team A</button>
}

