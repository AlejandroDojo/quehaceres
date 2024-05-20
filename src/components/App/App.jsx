import { useState } from 'react'
import './App.css'
import ViewList from '../ViewList/ViewList';
import AddToList from '../AddToList/AddToList';

// Form to add to list
// Form to see the list
// Form to delete in the list

function App() {
  const [todoList, setTodoList] = useState([
    {
      value: "",
      done: false
    },
    {
      value: "Limpiar la casa",
      done: false
    }
  ]);

  return (
    <>
      <h1>To do List</h1>
      <ViewList setTodoList={setTodoList} todoList={todoList}/>
      <AddToList setTodoList={setTodoList} todoList={todoList}/>
    </>
  )
}

export default App
