import { useEffect, useState } from "react";
import './App.css'
function cleanerfun(){
    const [count , setcount]=useEffect(0);
    useEffect(()=>{
        console.log('effect called');
        const timerID=setInterval(()=>{
            setcount(count=>count+1)
        },1000);

        return()=>{// cliner function -->Cleanup function in React is used inside useEffect to 
        // clean or stop side effects when a component is removed or before the effect runs again.
        //It helps prevent memory leaks and unwanted background tasks.
            console.log("cleaner function");
            clearInterval(timerID);
        }

    },[])
    return(
        <>
        <h1>Up-Counter</h1>
        <h2>{count}-yuvraj is buld cliner function</h2>
        </>
    );
}
export default cleanerfun;