import React from "react"; import Menu from "./Menu";
const TopBar=()=> <><header className="topbar-container"><Menu/></header><div className="indices-container"><div><span>NIFTY 50</span><b>24,141.30</b><em>+0.84%</em></div><div><span>SENSEX</span><b>79,476.19</b><em>+0.77%</em></div><div><span>BANK NIFTY</span><b>52,660.35</b><em>+1.02%</em></div><div className="market-open"><i/> Market open</div></div></>;
export default TopBar;
