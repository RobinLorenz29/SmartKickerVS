import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WinnerPage.css";

export default function WinnerPage() {
  const navigate = useNavigate();

  const [winner, setWinner] = useState("");
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    const fetchFinalData = async () => {
      try {
        const response = await fetch("http://localhost:7890/api/matches/current");
        const data = await response.json();

        setWinner(data.winner);
        setScoreA(data.goalTeamA);
        setScoreB(data.goalTeamB);
        setDuration(data.duration);
      } catch (err) {
        console.error("Fehler beim Laden der Gewinnerdaten:", err);
      }
    };

    fetchFinalData();
  }, []);

  const goHome = async () => {
    try {
      await fetch("http://localhost:7890/api/matches/current/reset", {
        method: "PUT"
      });
    } catch (err) {
      console.error("Reset Fehler:", err);
    }

    navigate("/");
  };

  // -----------------------------
  // 🎆 Feuerwerk-Animation
  // -----------------------------
  useEffect(() => {
    const canvas = document.getElementById("fireworks-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const rockets = [];
    const colors = ["#ff3b3b", "#ffb33b", "#3bff62", "#3be7ff", "#b33bff", "#ffffff"];

    class Rocket {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.speed = -(5 + Math.random() * 3);
        this.targetY = 200 + Math.random() * 300;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speed;
        if (this.y <= this.targetY) {
          explode(this.x, this.y, this.color);
          return true;
        }
        return false;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2, 8);
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 2 + Math.random() * 2;

        const angle = Math.random() * Math.PI * 2;
        const force = 2 + Math.random() * 4;
        this.vx = Math.cos(angle) * force;
        this.vy = Math.sin(angle) * force;

        this.alpha = 1;
      }

      update() {
        this.vy += 0.02;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015;
        return this.alpha <= 0;
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function explode(x, y, color) {
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(x, y, color));
      }
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.03) {
        rockets.push(new Rocket());
      }

      for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].draw();
        if (rockets[i].update()) rockets.splice(i, 1);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].draw();
        if (particles[i].update()) particles.splice(i, 1);
      }

      requestAnimationFrame(loop);
    }

    loop();

    return () => {
      particles.length = 0;
      rockets.length = 0;
    };
  }, []);

  return (
    <div className="winner-page">

      <canvas id="fireworks-canvas"></canvas>

      <div className="winner-content">
        <h1>Spiel beendet!</h1>
        <h2>Gewonnen: {winner}</h2>

        <p className="duration">Spielzeit: {duration}</p>
        <p className="score">Endstand: Team A {scoreA} : Team B {scoreB}</p>

        <button onClick={goHome} className="home-button">Home</button>
      </div>
    </div>
  );
}