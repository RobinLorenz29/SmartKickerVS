// App.jsx – Haupt-Routing der Anwendung

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Unsere Seiten
import StartPage from "./pages/StartPage.jsx"
import ScorePage from "./pages/ScorePage.jsx"
import WinnerPage from "./pages/WinnerPage.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Startseite */}
        <Route path="/" element={<StartPage />} />

        {/* Scoreboard-Seite */}
        <Route path="/score" element={<ScorePage />} />

        {/* Gewinner-Seite */}
        <Route path="/winner" element={<WinnerPage />} />
      </Routes>
    </BrowserRouter>
  )
}