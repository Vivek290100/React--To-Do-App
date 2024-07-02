
import "./App.css";

export const Task = (props) => {
  return (
    
    <div className={`task ${props.completed ? "completed" : "not-completed"}`}>
      <h1>{props.taskName}</h1>
      <div className="buttons">
        <button onClick={() => props.completeTask(props.id)}>
          {props.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => props.deleteTask(props.id)}><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  );
};
