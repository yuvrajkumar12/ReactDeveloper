import { useState } from 'react'
import './App.css'
import { Button } from './components/Button';

function App() {
 // const [count, setCount] = useState(0);
   const handleincrement=()=>{
    setCount(count+1);
   }

  return (
    <div className="App">
      <Button count={count} setCount={setCount} onclickincrement={handleincrement}/>
    </div>
  );
}

export default App;
