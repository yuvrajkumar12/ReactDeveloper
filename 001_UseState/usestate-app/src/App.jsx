import { useState } from "react";
import "./App.css";
import UpdateObject from "./UpdateObject";
import Ex01_Search_Brand from "./ex01_Search_Brand";

const Increment = ({ count, setcount }) => {
  return (
    <button onClick={() => setcount(count + 1)}>
      Increment {count}
    </button>
  );
};

const Decrement = ({ count, setcount }) => {
  return (
    <button onClick={() => setcount(count - 1)}>
      Decrement {count}
    </button>
  );
};

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <h2>Counter App</h2>

      <Increment count={count} setcount={setcount} />
      <Decrement count={count} setcount={setcount} />

      <UpdateObject />
      <Ex01_Search_Brand/>
    </>
  );
}

export default App;
