export default function TaskList({ taskList, deleteTask }) {
  return (
    <div>
      {taskList?.length > 0 ? (
        <ul className="task-list">
          {taskList.map((task, index) => (
            <div className="task">
              <li key={index}>{task}</li>
              <button
                className="delete-button"
                onClick={() => deleteTask(task)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="no-task">
          <p>No task added</p>
        </div>
      )}
    </div>
  );
}
