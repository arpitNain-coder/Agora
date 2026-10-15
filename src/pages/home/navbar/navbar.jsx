import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-icon">△</span>
        <span>AGORA</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#philosophy" onClick={() => setMenuOpen(false)}>
          Philosophy
        </a>
        <a href="#discussion" onClick={() => setMenuOpen(false)}>
          Discussion
        </a>
        <a href="#chatbots" onClick={() => setMenuOpen(false)}>
          Chatbots
        </a>
      </div>
    </nav>
  );
}

export default Navbar;