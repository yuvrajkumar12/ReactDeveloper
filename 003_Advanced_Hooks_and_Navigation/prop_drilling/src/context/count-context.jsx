import { createContext, useContext, useState } from "react";

const initialValue={
    const:0
}
const CountContext=createContext(initialValue);

//Provider
const CountProvider=({children})=>{
    const [count, setcount]=useState(111);

    return (
        <CountContext.Provider value={{count,setcount}}>
            {children}
        </CountContext.Provider>
    )
}
//Consumer
const useCount=()=>useContext(CountContext)
export {useCount, CountProvider};