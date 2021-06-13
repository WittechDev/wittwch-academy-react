import { FaTrashAlt } from "react-icons/fa";

function Task({ task, removeTask, toggleReminder }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTrashAlt
          style={{ color: "red" }}
          onClick={() => removeTask(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
}

export default Task;
