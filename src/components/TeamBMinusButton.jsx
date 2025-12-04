import React from 'react'

// Minus-Button für Team 2
export default function TeamBMinusButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button onClick={onClick}>Team B -1</button>
    </div>
  )
}