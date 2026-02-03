import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
function Todo(){
    const [todo, setTodo]=useState();
    const [todoList, setTodoList]=useState([]);
    const onTodoInputChange=(e)=>{
        setTodo(e.target.value);
    }

    const onAddTodoClick=()=>{
        setTodoList([...todoList,{id:uuid(), todo:todo, isCompleted:false}]);
        setTodo('');

    }

    const onDeletaclick=(id)=>{
        const updatedTodoList=todoList.filter(todo=>todo.id!==id);
        setTodoList(updatedTodoList);

    }

    const onTTodoCheckChange=(id)=>{
        const updatedTodoList=todoList.map(todo=>todo.id==id?{...todo, isCompleted:!todo.isCompleted}:todo);
        console.log(updatedTodoList);
        setTodoList(updatedTodoList);
    }

    return(
        <div className="App">
            <h1>My wishlist</h1>
            <div>
                <input value={todo} onChange={onTodoInputChange} placeholder="Add your wishlist here..." />
                <button onClick={onAddTodoClick}>Add</button>
            </div>
            <div>
                {
                    todoList && todoList.length > 0 && todoList.map(todo=>(
                        <div key={todo.id}>
                            <label>
                                <input onChange={()=>onTTodoCheckChange(todo.id)}type="checkbox" />
                                <span>{todo.todo}</span>

                            </label>
                            <button onClick={()=>onDeletaclick(todo.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    
    );
}
export default Todo;