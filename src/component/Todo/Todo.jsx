import React, { useState } from 'react'

const Todo = () => {
    const [todo,setTodo] = useState([]);
    const [task,setTask] = useState("");

    const ToggleComplete = (id) =>{
        setTodo(
            todo.map((t)=>t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const mytodo = {
            id : Date.now(),
            task,
            isCompleted : false
        }
        setTodo([...todo,mytodo]);
        setTask("");
    }
    const deleteTodo = (id) =>{
        console.log(id)
        const mytodo = todo.filter((t)=>t.id !== id)
        console.log(todo);
        console.log(mytodo);
        setTodo(mytodo);
    }
  return (
    <>
    <h1>Todo</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task :</label>
        <input type="text" id='task'name='task' placeholder='Enter task'
            onChange={(e)=>setTask(e.target.value)}
            value={task}
        />
        <input type="submit" value={"+"}/>
    </form>

    <ul>
        {todo.map((t)=>(
        <li key={t.id}>
            {t.task} 
            <button onClick={()=>ToggleComplete(t.id)}>{t.isCompleted ? "yes" : "NO"}</button>
            <button onClick={()=>deleteTodo(t.id)}>X</button>
            <button onClick={()=>editTodo(t.id)}>Edit</button>
        </li>
        ))}
    </ul>
    </>
  )
}

export default Todo;