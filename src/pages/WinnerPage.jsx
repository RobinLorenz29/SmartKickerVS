import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function WinnerPage() {
  const [winner, setWinner] = useState("")
  const [finalScoreA, setFinalScoreA] = useState(0)
  const [finalScoreB, setFinalScoreB] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:7890/api/matches/current")
      const data = await res.json()

      setWinner(data.winner)
      setFinalScoreA(data.teamA.goals)
      setFinalScoreB(data.teamB.goals)
    }
    load()
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Spiel beendet!</h1>
      <h2>Gewinner: {winner}</h2>
      <p>Team A: {finalScoreA}</p>
      <p>Team B: {finalScoreB}</p>

      <button onClick={() => navigate("/")}>
        Zurück zur Startseite
      </button>
    </div>
  )
}