import { useState } from "react";
import { genTicket, sum } from "./helper.js";
import "./Lottery.css";
export default function Lottery(){
    let [ticket, setTicket]=useState(genTicket(3));
    let isWinning = sum(ticket)===15;
    let BuyTicket=()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={BuyTicket}>BuyTicket</button>
            <h3>{isWinning && "Congratulation, You won!"}</h3>
        </div>
    );
}