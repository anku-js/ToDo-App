import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";

function App() {
  const [task, setTask] = useState("");
  
  return (
    <div className="app">
      <h1>To Do App</h1>
      <TaskInput task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
