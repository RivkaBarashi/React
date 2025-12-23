import TaskDetails from "./TaskDetails";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <>
      <h2>Todo List</h2>
        {todoList.map((task) => (
          <TaskDetails
             key={task.id}
             task={task}
            setTodoList={setTodoList}
          />
         ))
        }
    </>
  );
};

export default TodoList;