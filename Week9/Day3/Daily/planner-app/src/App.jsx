import { useState } from "react";
import "./App.css";
import Calendar from "./tasksToolKit/Calendar";
import TaskList from "./tasksToolKit/TaskList";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <>
      <h1>Task Manager</h1>
      <Calendar setSelectedDate={setSelectedDate} />
      <TaskList date={selectedDate} />
    </>
  );
}

export default App;
