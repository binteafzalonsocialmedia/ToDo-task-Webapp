import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Statistics from "./pages/statistics";
import Completed from "./pages/completed";
import Pending from "./pages/pending";
import EditTask from "./pages/editTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //add function
  function addTask(title) {
    console.log(title);
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);

  };
  //delete function
  function deleteTask(id) {
    const filteredArray = tasks.filter(task => task.id !== id);
    setTasks(filteredArray);
  };

  //toggle task
  function toggleTask(id) {
    const toggledArray = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      else {
        return task;
      }
    }
    )
    setTasks(toggledArray);
  };

  //edittask
  function editTask(taskId, editedTitle) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: editedTitle
        }
      }
      else {
        return task;
      }
    });
    setTasks(updatedTasks)
  };



  return (
    <Routes>
      <Route path="/" element={<Dashboard
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />} />
      <Route path="/pending" element={<Pending tasks={tasks} />} />
      <Route path="/completed" element={<Completed tasks={tasks} />} />
      <Route path="/statistics" element={<Statistics tasks={tasks} />} />
      <Route path="/editTask/:id" element={<EditTask
        tasks={tasks}
        editTask={editTask}
      />} />
    </Routes>
  );
}

export default App;