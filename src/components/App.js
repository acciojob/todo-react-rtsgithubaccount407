import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
  const [todo, setTodo] = useState("");
  const [addtodo,setAddTodo] = useState([])

  const handleAdd = (e) => {
    e.preventDefault();
    setAddTodo([...addtodo, todo])
    
  }

  const handleDelete = (index) => {
    setAddTodo(addtodo.filter((todo, i)=> i !== index ))
   };
  

  return (
    <div>
      <h1>To-DO List</h1>
      <form>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </form>

      {addtodo.map((todo,index) => {
        return (
          <ul key={index}>
            <div className="todo-item">
              <p>
                <li>{todo}</li>
              </p>
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default App
