import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
import { toast,Toaster } from "react-hot-toast";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask !== "") {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    setNewTask(""); 

  } else {
    toast.error("Task name cannot be empty!");
  }
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };


  return (
    <>
    <h1 className="To-Do-List">To-Do-List</h1>
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div type="description" className="list">
        {todoList.map((task) => (
          <Task 
            key={task.id}
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
    <Toaster />
    </>
  );
}

export default App;
