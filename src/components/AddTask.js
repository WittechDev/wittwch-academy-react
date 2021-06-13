import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add some task");
      return;
    }

    const data = {
      id: Math.floor(Math.random() * 10000),
      text,
      date,
      reminder,
    };
    addTask(data);

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <button className="btn btn-block" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
