
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function implementAddToDo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo])
    setTodo("")
  }

  function handleDelete(index) {

    setTodoList(todoList.filter((value,position)=>position !== index))
  }
  return (
    <div>
      <form onSubmit={implementAddToDo}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoList.map((item,index) => {
          return (
            <li key={item}>
              {item}
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
