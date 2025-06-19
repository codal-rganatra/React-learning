import React, { use } from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [todo, settodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const updateTodo = (e) => {
        e.preventDefault();
        if(inputValue.trim() === "") {
            return;
        }
        else{
            settodo([...todo, inputValue]);
            setInputValue(""); 
        }
    }
    const handeChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <form onSubmit={updateTodo}>
            <input type="text" placeholder="Add a new todo" value={inputValue} onChange={handeChange}/>
            <button type="submit">Add Todo</button>
        </form>
        <ul>
            {
                todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList