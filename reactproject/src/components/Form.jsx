import { useState } from "react";
const Form = ({setTodoList,setNewForm}) => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
 
 
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

    const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
       id: Date.now(),
      title: Title,
      description: Description,
      time: new Date(Date.now()),
      completed: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTask]);
    setTitle("");
    setDescription("");
    setNewForm(false);
  }
    return (
    <>
    <form onSubmit={handleSubmit}>
     <input  placeholder=" enter title " onChange={handleTitleChange}/>
     <input  placeholder=" enter description " onChange={handleDescriptionChange}/>
     <button type="submit">Add Task</button>
    </form>
    </>
  )
}
export default Form;