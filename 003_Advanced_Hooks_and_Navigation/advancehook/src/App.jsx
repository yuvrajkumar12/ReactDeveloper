import { useState } from 'react'
import './App.css'
import { useReducer } from 'react';
import { reducerFun } from './reducer/reducer';

function App() {
  const  initialState={
    count:0
  }
  const [state, dispatch]= useReducer(reducerFun, initialState);


  return (
    <>
      <div >
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'INCREMENT', payload:'1234'})}>inc</button>
        <button onClick={()=>dispatch({type:'DECREMENT', payload: '123'})}>Dec</button>
      </div>
    </>
  );
}

export default App
