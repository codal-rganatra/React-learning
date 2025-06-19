import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() === '') return; // Prevent adding empty todos
        setTodos([...todos, {id:Math.floor(Math.random() * 1000), text: inputValue.trim()}]);
        setInputValue(''); // Clear input after adding
    }
    const removetodo = (id) => {
        console.log(todos.filter(todo => todo.id !== id));
        setTodos(todos.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        }));
    }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>

        <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Add a new todo"
        />
        <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>

        <ul style={{listStyleType: 'none', padding: 0}}>
            {
                todos.map((todo)=>(
                    <li key={todo.id} style={{display: 'flex', flexDirection: 'row', padding: 0, gap: 20}}>{todo.text}
                    <button className="remove" onClick={() => removetodo(todo.id)}>X</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo