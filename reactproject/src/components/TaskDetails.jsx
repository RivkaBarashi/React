const TaskDetails = ({task,setTodoList}) => {
 const{id,title,description,time,completed}=task;
    const handleCompletedTask = () => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  };
 return (
    <>  
    <div 
    style={{
          textDecoration: completed ? "line-through" : "none",
        }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedTask}
        />
        <h2>{title}</h2>
      </div>
      <p>Description: {description}</p>
      <p>Time: {time.toLocaleTimeString()}</p>
    </div>
    </>
    )
    }
export default TaskDetails;