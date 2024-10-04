import {useState} from "react";
export default function hello(){
//    let [stateVariable,setStateVariable]=useState(0);
   let [count,setCount]=useState(0); //use State
   let intCount=()=>{
    // count=count+1;
    setCount(count+1);
    //console.log(count);
   };
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={intCount}>Increment</button>
        </div>
    );
}
