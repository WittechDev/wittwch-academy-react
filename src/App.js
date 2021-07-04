import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Button from "./components/Button";
import { decremented, incremented } from "./store/counterSlice";

// import { createStore } from "redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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

      <div style={{ display: "flex" }}>
        <Button
          bgColor={"green"}
          text={"-"}
          onClick={() => dispatch(decremented())}
        />
        <div>{count}</div>
        <Button
          bgColor={"green"}
          text={"+"}
          onClick={() => dispatch(incremented())}
        />
      </div>
    </Router>
  );
}

export default App;

// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case "counter/incremented":
//       return { value: state.value + 1 };
//     case "counter/decremented":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// let store = createStore(counterReducer);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "counter/incremented" });
// // {value: 1}
// store.dispatch({ type: "counter/incremented" });
// // {value: 2}
// store.dispatch({ type: "counter/decremented" });
// // {value: 1}
