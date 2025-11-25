export default function ResetButton({ reset }) {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={reset}>Reset</button>
    </div>
  )
}