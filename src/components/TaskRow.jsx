import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function TaskRow({ task }) {
  const { toggleTask, deleteTask } = useApp();
  return (
    <div className="task-row">
      <button className="check-btn" onClick={() => toggleTask(task.id)}>
        {task.status === "Completed" ? <CheckCircle2 size={21}/> : <Circle size={21}/>}
      </button>
      <div className="task-main">
        <strong className={task.status === "Completed" ? "done" : ""}>{task.title}</strong>
        <span>{task.project} · Due {task.due}</span>
      </div>
      <span className={`badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)} title="Delete"><Trash2 size={17}/></button>
    </div>
  );
}