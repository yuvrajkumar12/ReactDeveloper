import { useState } from "react";
export default function loduBoard(){
    let [move,setMove]=useState({Blue:0,Yellow:0,Green:0,Red:0});
    let updateblue=()=>{
        move.Blue+=1;
        setMove({...move});
    };
    let updateyellow=()=>{
        move.Yellow+=1;
        setMove({...move});
    };
    let updategreen=()=>{
        move.Green+=1;
        setMove({...move});
    };
    let updatered=()=>{
        move.Red+=1;
        setMove({...move});
    };
    return(
        <div>
            <h1>Lodo Board</h1>
            <div className="board">
            <p>Blue Move={move.Blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>Yellow Move={move.Yellow} </p>
            <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
            <p>Green Move={move.Green} </p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
            <p>Red Move={move.Red}</p>
            <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
            </div>
        </div>
    );
}