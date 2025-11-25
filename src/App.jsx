// Hauptkomponente: Hier werden alle TeamScores und der ResetButton zusammengebracht

import React, { useState } from 'react'
import TeamScore from './components/TeamScore'       // Import der TeamScore-Komponente
import ResetButton from './components/ResetButton'  // Import des ResetButtons

export default function App() {
  // resetFlag speichert, ob wir die Scores zurücksetzen wollen
  const [resetFlag, setResetFlag] = useState(false)

  // Funktion, die resetFlag ändert
  // Dadurch wissen die TeamScore-Komponenten, dass sie sich zurücksetzen sollen
  const resetAll = () => setResetFlag(!resetFlag)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>SmartKicker Scoreboard</h1>
      
      {/* Zeige TeamScore-Komponente für Team 1 */}
      <TeamScore name="Team 1" resetFlag={resetFlag} />
      
      {/* Zeige TeamScore-Komponente für Team 2 */}
      <TeamScore name="Team 2" resetFlag={resetFlag} />
      
      {/* Zeige den ResetButton */}
      <ResetButton reset={resetAll} />
    </div>
  )
}
