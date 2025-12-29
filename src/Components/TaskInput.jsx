import { Plus, Sparkles } from "lucide-react";
import React from "react";

const TaskInput = ({ task, setTask, submitHandler }) => {
  return (
    <form
      className="w-full mx-auto max-w-5xl mt-6 glass flex items-center p-4 gap-3 animate-slide-in"
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="relative w-[85%]">
        <Sparkles
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          size={20}
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="glass-card w-full py-3 pl-12 pr-4 outline-0 text-lg placeholder:text-white/50 focus:bg-white/25 focus:scale-[1.01] transition-all duration-300"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="flex gap-2 items-center justify-center w-[15%] py-3 px-4 glass-btn glass-btn-hover rounded-xl font-semibold shadow-lg"
      >
        <Plus size={20} />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  );
};

export default TaskInput;
