import React from 'react'

// Minus-Button für Team 1
export default function Team1MinusButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={onClick}>Team 1 -1</button>
    </div>
  )
}