import React from 'react'

// Button zum Zurücksetzen aller Scores
export default function ResetButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onClick}>Reset</button>
    </div>
  )
}