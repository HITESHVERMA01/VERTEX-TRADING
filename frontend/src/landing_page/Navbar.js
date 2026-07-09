import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  ["/product", "Products"],
  ["/pricing", "Pricing"],
  ["/about", "Company"],
  ["/support", "Support"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label="Vertex home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Vertex<span className="brand-dot">.</span></span>
        </Link>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
        <div className={`nav-content ${open ? "is-open" : ""}`}>
          <div className="nav-links">
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
              {dark ? "☀" : "◐"}
            </button>
            <a className="text-link" href="http://localhost:3001">Log in</a>
            <Link className="button button-sm" to="/signup">Open account</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
