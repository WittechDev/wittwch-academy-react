import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping",
      date: "today",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to School",
      date: "today",
      reminder: true,
    },
    {
      id: 3,
      text: "Dinner",
      date: "tmr",
      reminder: false,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
