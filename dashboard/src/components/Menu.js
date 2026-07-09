import React from "react";
import { NavLink } from "react-router-dom";
const links=[["/","Overview"],["/orders","Orders"],["/holdings","Holdings"],["/positions","Positions"],["/funds","Funds"],["/apps","Apps"]];
const Menu=()=> <div className="menu-container"><NavLink to="/" className="dash-brand"><span className="dash-mark"><i/><i/><i/></span><b>Vertex<span>.</span></b></NavLink><nav className="menus" aria-label="Trading dashboard">{links.map(([to,label])=><NavLink key={to} to={to} end={to==="/"} className={({isActive})=>isActive?"menu selected":"menu"}>{label}</NavLink>)}</nav><div className="profile"><button className="notification" aria-label="Notifications">♢<i/></button><div className="avatar">HV</div><div className="profile-copy"><b>Hitesh</b><span>Personal</span></div><span>⌄</span></div></div>;
export default Menu;
