import { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState(["Sample Task"]); // List of tasks
    const [newTodo, setNewTodo] = useState(""); // Corrected to an empty string

    const addNewTask = () => {
        if (newTodo.trim()) { // Check if input is not empty
            setTodos([...todos, newTodo]); // Add new task to the list
            setNewTodo(""); // Clear the input field after adding
            console.log("Task added:", newTodo);
        } else {
            console.log("Task cannot be empty");
        }
    };
    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a Task" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} // Handle input change
            />
            <br />
            <button onClick={addNewTask}>Add</button>
            <br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li> // Ensure each item has a unique key
                ))}
            </ul>
        </div>
    );
}
