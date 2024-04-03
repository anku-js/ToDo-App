export default function TaskInput({ task, setTask }) {
  return (
    <div className="task-input-wrapper">
        //Added an input field for user to add a new task
      <input
        type="text"
        name="toDo"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className="add-button">Add</button>
    </div>
  );
}
