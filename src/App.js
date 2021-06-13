import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  const addTask = (task) => {
    console.log(`addTask`, task);
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    console.log(`remove task`, id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="container">
      <Header
        showAddTask={showAddTask}
        toggleAddTask={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          removeTask={removeTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "no tasks"
      )}
    </div>
  );
}

export default App;
