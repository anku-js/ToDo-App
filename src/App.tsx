import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  addTodo,
  deleteTodo,
  toggleTodoCompletion,
} from "./features/Todos/todosSlice";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState("");
  const todos = useAppSelector((state) => state.todos.todos);

  const addTask = () => {
    if (todo !== "") {
      dispatch(
        addTodo({ id: uuidv4(), todoName: todo, isTodoCompleted: false })
      );
      setTodo("");
    }
  };

  const deleteTask = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckboxClick = (id: string) => {
    dispatch(toggleTodoCompletion(id));
  };

  return (
    <div className="app">
      <h1>To Do App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTask={addTask} />
      <Todos
        todos={todos}
        deleteTask={deleteTask}
        handleCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
}

export default App;
