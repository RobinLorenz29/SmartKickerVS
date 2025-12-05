// Minus-Button für Team B

import React from "react"

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

  return <button onClick={decrease}>- Team B</button>
}


