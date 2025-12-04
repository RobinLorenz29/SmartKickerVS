import React from 'react'

// Minus-Button für Team 1
export default function TeamAMinusButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={onClick}>Team A -1</button>
    </div>
  )
}