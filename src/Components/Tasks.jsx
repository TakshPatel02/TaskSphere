import { Pen, Trash } from "lucide-react";
import React from "react";

const Tasks = ({ task, toggleComplete, deleteTask, editHandler }) => {
  return (
    <div className="w-full mx-auto max-w-5xl mt-4 flex items-center p-5 glass justify-between group hover:bg-white/18 transition-all duration-300 animate-slide-in">
      <input
        type="checkbox"
        checked={task.completed}
        onClick={toggleComplete}
        className="flex-shrink-0"
      />
      <div
        className={
          task.completed
            ? "line-through text-gray-400 w-[78%] text-lg capitalize transition-all duration-300 opacity-60"
            : "text-lg capitalize w-[78%] font-medium"
        }
      >
        {task.text}
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          className="glass-btn p-2 rounded-lg hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-110"
          onClick={editHandler}
          title="Edit task"
        >
          <Pen size={18} className="text-blue-300" />
        </button>
        <button
          className="glass-btn p-2 rounded-lg hover:bg-red-500/30 hover:border-red-400/50 transition-all duration-300 group-hover:scale-110"
          onClick={deleteTask}
          title="Delete task"
        >
          <Trash size={18} className="text-red-300" />
        </button>
      </div>
    </div>
  );
};

export default Tasks;
