// ScorePage.jsx – zeigt Scoreboard + Buttons

import React from "react"
import MatchTime from "../components/MatchTime"
import TeamScore from "../components/TeamScore"
import TeamAMinusButton from "../components/TeamAMinusButton"
import TeamBMinusButton from "../components/TeamBMinusButton"
import ResetButton from "../components/ResetButton"

export default function ScorePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>SmartKicker Scoreboard</h1>

      {/* Spielzeit */}
      <MatchTime />

      {/* Team Scores */}
      <TeamScore team="teamA" />
      <TeamScore team="teamB" />

      {/* Minus Buttons */}
      <TeamAMinusButton />
      <TeamBMinusButton />

      {/* Reset */}
      <ResetButton />
    </div>
  )
}