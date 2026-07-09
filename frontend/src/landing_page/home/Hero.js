import React from "react";
import { Link } from "react-router-dom";

const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "https://vertex-dashboard-tan.vercel.app/";

function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="section-shell hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span>●</span> Investing, thoughtfully redesigned</div>
          <h1>Your money deserves a <em>clearer view.</em></h1>
          <p>One beautifully simple platform to invest, trade, and understand your wealth—without the noise.</p>
          <div className="hero-actions"><Link className="button" to="/signup">Start investing <span>→</span></Link><a className="button button-ghost" href={dashboardUrl}>Open dashboard</a></div>
          <div className="hero-trust"><div className="avatar-stack"><span>AS</span><span>RK</span><span>MV</span></div><div><strong>Trusted by 1.4M+ investors</strong><small>4.8/5 average platform rating</small></div></div>
        </div>
        <div className="terminal-card reveal delay-1" aria-label="Portfolio preview">
          <div className="terminal-top"><div><span className="live-dot" /> Portfolio</div><div className="terminal-actions">•••</div></div>
          <div className="portfolio-value"><span>Total value</span><h2>₹8,42,560.80</h2><p>+₹12,480.40 <b>+1.50% today</b></p></div>
          <div className="chart-shell">
            <div className="chart-labels"><span>₹8.5L</span><span>₹8.2L</span><span>₹7.9L</span></div>
            <svg viewBox="0 0 520 180" role="img" aria-label="Portfolio rising over six months"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6c5ce7" stopOpacity=".34"/><stop offset="1" stopColor="#6c5ce7" stopOpacity="0"/></linearGradient></defs><path className="chart-area" d="M0 150 C45 140 65 115 105 125 S165 92 205 105 S270 72 305 85 S365 55 405 66 S470 22 520 30 L520 180 L0 180Z"/><path className="chart-line" d="M0 150 C45 140 65 115 105 125 S165 92 205 105 S270 72 305 85 S365 55 405 66 S470 22 520 30"/></svg>
            <div className="chart-dates"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>
          </div>
          <div className="asset-strip"><div><span className="asset-icon indigo">N</span><p><b>NIFTYBEES</b><small>42 units</small></p><strong>+2.14%</strong></div><div><span className="asset-icon coral">R</span><p><b>RELIANCE</b><small>18 units</small></p><strong>+1.08%</strong></div></div>
        </div>
      </div>
      <div className="market-ticker"><div><span>NIFTY 50</span><b>24,141.30</b><em>+0.84%</em></div><div><span>SENSEX</span><b>79,476.19</b><em>+0.77%</em></div><div><span>BANK NIFTY</span><b>52,660.35</b><em>+1.02%</em></div><div><span>INDIA VIX</span><b>14.32</b><em className="negative">-2.16%</em></div></div>
    </section>
  );
}
export default Hero;
