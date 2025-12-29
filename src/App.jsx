import React, { useState } from "react";
import Header from "./Components/Header";
import TaskDetails from "./Components/TaskDetails";
import TaskInput from "./Components/TaskInput";
import Task from "./Components/Tasks";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIdx, setEditIdx] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (task === "") return;
    const copyTask = [...taskList];

    if (editIdx !== null) {
      copyTask[editIdx] = { text: task, completed: false };
      setTaskList(copyTask);
      setEditIdx(null);
    } else {
      copyTask.push({ text: task, completed: false });
      setTaskList(copyTask);
    }
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  const deleteTask = (index) => {
    const deleteTasks = [...taskList];
    deleteTasks.splice(index, 1);
    setTaskList(deleteTasks);
  };

  const editHandler = (index) => {
    setTask(taskList[index].text);
    setEditIdx(index);
  };

  const allTasksLength = taskList.length;
  const completedTasksLength = taskList.filter((task) => task.completed).length;
  const percentage =
    allTasksLength === 0
      ? 0
      : Math.round((completedTasksLength / allTasksLength) * 100);

  return (
    <div className='w-full min-h-screen mx-auto bg-[url("../public/app_bg.jpg")] bg-cover bg-center text-white/90 p-8 pb-20'>
      <Header
        percentage={percentage}
        allTasksLength={allTasksLength}
        completedTasksLength={completedTasksLength}
      />
      <TaskDetails
        allTasksLength={allTasksLength}
        completedTasksLength={completedTasksLength}
      />
      <TaskInput submitHandler={submitHandler} setTask={setTask} task={task} />
      <div className="space-y-3 mt-6">
        {taskList.length === 0 ? (
          <div className="w-full max-w-5xl mx-auto glass p-8 text-center">
            <p className="text-2xl text-white/50 mb-2">✨ No tasks yet</p>
            <p className="text-white/40">
              Start by adding your first task above
            </p>
          </div>
        ) : (
          taskList.map((task, index) => (
            <Task
              key={index}
              task={task}
              toggleComplete={() => toggleComplete(index)}
              deleteTask={() => deleteTask(index)}
              editHandler={() => editHandler(index)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
