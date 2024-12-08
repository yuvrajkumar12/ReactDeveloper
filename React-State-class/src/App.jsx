import './App.css';
// import Counter from "./Counter.jsx";
// import Likebutton from "./Likebutton"; // Corrected to "Likebutton"
// import LodoBoard from './LodoBoard.jsx';//state
// import TodoList from './TodoList.jsx';
// import Lottery from './Lottery.jsx';
import TicketNum from "./TicketNum";

function App() {
  return (
    <>
        <TicketNum num={5}/>
        <TicketNum num={3}/>
        <TicketNum num={4}/>
    </>
  );
}
export default App;

