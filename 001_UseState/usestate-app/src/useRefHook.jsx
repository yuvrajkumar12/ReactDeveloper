import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function useRefHook(){
    const [count, settime]=useState(0);
    const timerRef=useRef('yuvraj');

    const onStartClick=()=>{
        timerRef.current=setInterval(()=>{
            settime(count => count+1);
        },100)
    }

    const onStopClick=()=>{
        clearInterval(timerRef.current);
    }

    return(
        <>
        <h1>Stop Time watch </h1>
        <p>Count-{count}</p>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>stop</button>
        </>

    );
}

export default useRefHook;