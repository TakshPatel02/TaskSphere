import { CloudLightning, Flashlight } from "lucide-react";
import React from "react";

const TaskDetails = ({ allTasksLength, completedTasksLength }) => {
  return (
    <div className="w-full mx-auto max-w-5xl mt-6 flex gap-4 animate-slide-in">
      <div className="glass w-1/3 p-6 group hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-all">
            <i className="ri-flashlight-line text-blue-300 text-xl"></i>
          </div>
          <h1 className="text-sm text-white/70 font-medium uppercase tracking-wide">
            Total
          </h1>
        </div>
        <p className="text-4xl font-bold">{allTasksLength}</p>
      </div>
      <div className="glass w-1/3 p-6 group hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 transition-all">
            <i className="ri-circle-line text-orange-300 text-xl"></i>
          </div>
          <h1 className="text-sm text-white/70 font-medium uppercase tracking-wide">
            Active
          </h1>
        </div>
        <p className="text-4xl font-bold">
          {allTasksLength - completedTasksLength}
        </p>
      </div>
      <div className="glass w-1/3 p-6 group hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-all">
            <i className="ri-checkbox-circle-line text-green-400 text-xl"></i>
          </div>
          <h1 className="text-sm text-green-400 font-medium uppercase tracking-wide">
            Completed
          </h1>
        </div>
        <p className="text-4xl font-bold text-green-300">
          {completedTasksLength}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
