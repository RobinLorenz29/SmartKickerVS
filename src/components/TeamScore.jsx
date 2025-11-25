// Diese Komponente zeigt den Punktestand eines Teams und erhöht ihn per Button

import React, { useState, useEffect } from 'react'

// Default Export, damit wir die Komponente in App.jsx importieren können
export default function TeamScore({ name, resetFlag }) {
  // useState speichert den aktuellen Score
  const [score, setScore] = useState(0)

  // useEffect wird benutzt, um den Score zurückzusetzen,
  // wenn sich resetFlag ändert
  useEffect(() => {
    setScore(0) // Score zurücksetzen
  }, [resetFlag]) // Läuft jedes Mal, wenn resetFlag sich ändert

  return (
    <div style={{ margin: '20px', textAlign: 'center'}}>
      {/* Zeige den Teamnamen */}
      <h2>{name}</h2>
      {/* Zeige den aktuellen Score */}
      <p style={{ fontSize: '40px' }}>{score}</p>
      {/* Button, um den Score zu erhöhen */}
      <button onClick={() => setScore(score + 1)}>+1</button>
      {/* -1 Button und Score fällt nicht unter 0 */}
      <button onClick={() => setScore(Math.max(0, score - 1))}>-1</button>
    </div>
  )
}