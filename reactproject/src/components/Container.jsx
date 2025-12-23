import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const Container = () => {
    const [todoList, setTodoList] = useState([]);
  const [NewForm, setNewForm] = useState(false);
  return (
    <> 
    {NewForm &&
    <Form
          setTodoList={setTodoList}
          setNewForm={setNewForm}
        />}
        {!NewForm &&
        <>
          <button onClick={() => setNewForm(true)}>
          Open Form
          </button>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </>
        }
    </>
    )
    }
export default Container;