import React,{useContext,useState} from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://vertex-trading-api.onrender.com";

const BuyActionWindow=({uid})=>{const context=useContext(GeneralContext);const [qty,setQty]=useState(1);const [price,setPrice]=useState(0);const buy=async()=>{await axios.post(`${API_BASE_URL}/newOrder`,{name:uid,qty:Number(qty),price:Number(price),mode:"BUY"});context.closeBuyWindow()};return <div className="order-modal-backdrop"><section className="order-window" role="dialog" aria-modal="true" aria-labelledby="order-title"><header className="order-header"><div><span>BUY ORDER</span><h3 id="order-title">{uid}</h3></div><button onClick={context.closeBuyWindow} aria-label="Close">×</button></header><div className="regular-order"><label>Quantity<input type="number" min="1" value={qty} onChange={e=>setQty(e.target.value)}/></label><label>Limit price<input type="number" min="0" step=".05" value={price} onChange={e=>setPrice(e.target.value)}/></label></div><footer className="buttons"><span>Estimated margin <b>₹{(Number(qty)*Number(price)).toFixed(2)}</b></span><div><button className="cancel-order" onClick={context.closeBuyWindow}>Cancel</button><button className="confirm-order" onClick={buy}>Review buy</button></div></footer></section></div>};
export default BuyActionWindow;
