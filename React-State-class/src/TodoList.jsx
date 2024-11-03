import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    const [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4(),isDone:false}]); // List of tasks
    const [newTodo, setNewTodo] = useState(""); // Corrected to an empty string

    let addNewTask=()=>{
        setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
     
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!=id));

    };
    
    let MarkAsDone1 = () => {
        setTodos(todos => 
            todos.map(todo => ({
                ...todo,
                isDone: true
            }))
        );
    };
    let MarkAsDone=(id)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id==id){
            return{
                ...todo,
                isDone:true,
            };
        }else{
            return todo;
        }
        })
        );
    };

    return (
        <div>
            <input 
                
                placeholder="Add a Task" 
                value={newTodo} 
                onChange={updateTodoValue} // Handle input change
            />
            <br />
            <button onClick={addNewTask}>Add</button>
            
            <br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id }> <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                    {todo.task}
                </span>
                    &nbsp;&nbsp;&nbsp;
                    <button className="btn dark" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    <button className="btn dark" onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>

                    </li> // Ensure each item has a unique key
                
                ))}
            </ul>
            <button onClick={MarkAsDone1}>toUpperCase</button>
        </div>
    );
}
