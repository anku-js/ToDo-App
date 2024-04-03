import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/Tasklist";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // addTask function adds the new task in taskList when add button is clicked and if input field is not empty. It makes the input field empty after adding the task
  const addTask = () => {
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };
  const deleteTask = (deleted) => {
    const filteredTask = taskList.filter((task) => {
      return task !== deleted;
    });
    setTaskList(filteredTask);
  };
  return (
    <div className="app">
      <h1>To Do App</h1>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList taskList={taskList} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
