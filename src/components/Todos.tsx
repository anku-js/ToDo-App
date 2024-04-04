import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { Todo } from "./../common/types"

interface Props {
  todos: Todo[];
  deleteTask: any;
  handleCheckboxClick: any;
}

export default function TaskList({
  todos,
  deleteTask,
  handleCheckboxClick,
}: Props) {
  return (
    <div>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map(({ id, todoName, isTodoCompleted}) => (
            <div className="todo" key={id}>
              <div onClick={() => handleCheckboxClick(id)}>
                {isTodoCompleted ? (
                  <MdCheckBox
                    className={`completion-checkbox ${
                      isTodoCompleted ? "completed" : ""
                    }`}
                  />
                ) : (
                  <MdCheckBoxOutlineBlank
                    className={`completion-checkbox ${
                      isTodoCompleted ? "completed" : ""
                    }`}
                  />
                )}
              </div>

              <div
                className={`todo-name ${isTodoCompleted ? "completed" : ""}`}
              >
                {todoName}
              </div>

              <button
                className="delete-button"
                onClick={() => deleteTask(id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="no-todo">
          <p>No todo added</p>
        </div>
      )}
    </div>
  );
}
