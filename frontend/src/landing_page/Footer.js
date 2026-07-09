import React from "react";
import { Link } from "react-router-dom";

const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "https://vertex-dashboard-tan.vercel.app/";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand"><span className="brand-mark"><i /><i /><i /></span><span>Vertex<span className="brand-dot">.</span></span></Link>
          <p>Invest with clarity. Trade with confidence.</p>
          <div className="status-pill"><span /> All systems operational</div>
        </div>
        <div><h3>Platform</h3><Link to="/product">Products</Link><a href={dashboardUrl}>Open dashboard</a><Link to="/pricing">Pricing</Link></div>
        <div><h3>Company</h3><Link to="/about">About us</Link><Link to="/about">Careers</Link><Link to="/about">Press room</Link></div>
        <div><h3>Resources</h3><Link to="/support">Help center</Link><Link to="/support">Market education</Link><Link to="/support">Contact</Link></div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Vertex Securities Pvt. Ltd. All rights reserved.</p>
        <div><button>Privacy</button><button>Terms</button><button>Disclosures</button></div>
      </div>
      <p className="risk-copy">Investments in securities markets are subject to market risks. Read all related documents carefully before investing. Vertex is a demonstration trading platform; market values shown may be delayed or illustrative.</p>
    </footer>
  );
}

export default Footer;
