interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

export default function TaskInput({ todo, setTodo, addTask }: Props) {
  return (
    <div className="todo-input-wrapper">
      <input
        className="todo-input"
        type="text"
        name="toDo"
        placeholder="Add a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
}
