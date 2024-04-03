export default function TaskList({ taskList }) {
  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <div>
            <li key={index}>{task}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
