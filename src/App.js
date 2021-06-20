import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

import { createStore } from "redux";

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
    // console.log(tasks);
  }, [tasks]);

  return (
    <Router>
      <div className="container">
        <Header
          showAddTask={showAddTask}
          toggleAddTask={() => setShowAddTask(!showAddTask)}
        />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/"
            render={(props) => (
              <>
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
              </>
            )}
          />
        </Switch>
      </div>
      <footer>
        <p>Powered by CrazydogM</p>
        <Link to="/about">about me</Link>
      </footer>

      <div>
        <button>-</button>
      </div>
    </Router>
  );
}

export default App;

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
