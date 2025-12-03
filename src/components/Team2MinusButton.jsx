import React from 'react'

// Minus-Button für Team 2
export default function Team2MinusButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={onClick}>Team 2 -1</button>
    </div>
  )
}