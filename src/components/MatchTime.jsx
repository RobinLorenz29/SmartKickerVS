import React, { useState, useEffect } from 'react'

// Zeigt die aktuelle Spielzeit an
export default function MatchTime() {
  const [time, setTime] = useState("00:00")

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch("http://localhost:7890/api/time")
        const data = await response.json()
        setTime(data.time) // Beispiel: { "time": "12:34" }
      } catch (error) {
        console.error("Fehler beim Laden der Zeit:", error)
      }
    }

    fetchTime()
    const interval = setInterval(fetchTime, 1000) // alle 1 Sekunde
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3>Spielzeit: {time}</h3>
    </div>
  )
}