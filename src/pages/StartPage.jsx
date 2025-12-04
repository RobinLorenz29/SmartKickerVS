import React from "react"
import { useNavigate } from "react-router-dom"


export default function StartPage() {
  const navigate = useNavigate()

  const startMatch = async () => {
    try {
      await fetch("http://localhost:7890/api/matches", { method: "POST" })
      navigate("/score")
    } catch (err) {
      console.error("Fehler beim Match-Start:", err)
    }
  }

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>SmartKicker</h1>
      <button onClick={startMatch} style={{fontSize:"30px", padding:"20px"}}>
        Match starten
      </button>
    </div>
  )
}