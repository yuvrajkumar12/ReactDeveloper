import './App.css';
import Counter from "./Counter.jsx";
import Likebutton from "./Likebutton"; // Corrected to "Likebutton"
import LodoBoard from './LodoBoard.jsx';//state
import TodoList from './TodoList.jsx';


function App() {
  return (
    <>
      <TodoList/>
      <LodoBoard/>
    </>
  );
}
export default App;

