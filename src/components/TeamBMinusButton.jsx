// Minus-Button für Team B

import React from "react"
import "../styles/TeamBMinusButton.css"

export default function TeamBMinusButton() {
  const decrease = async () => {
    try {
      await fetch("http://localhost:7890/api/matches/current/correct/teamB", {
        method: "PUT"
      })
    } catch (err) {
      console.error("TeamB - Fehler:", err)
    }
  }

  return <button className="btn-teamB" onClick={decrease}>- Team B</button>
}


