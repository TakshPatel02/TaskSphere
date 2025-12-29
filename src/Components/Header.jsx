import { Star, ChartNoAxesCombined } from "lucide-react";
import React from "react";

const Header = ({ percentage, completedTasksLength, allTasksLength }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-5xl glass p-6 animate-fade-in">
        <div className="flex items-center justify-between rounded-2xl ">
          <div className="flex items-center gap-4">
            <div className="text-3xl px-3 py-2 border rounded-2xl glass-btn glass-icon-btn">
              <i className="ri-gemini-line"></i>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-wider bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                TaskFlow
              </h1>
              <p className="text-white/70 text-sm">Productivity Reimagined</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border rounded-3xl px-5 py-3 glass-btn glass-btn-hover cursor-pointer">
            <ChartNoAxesCombined className="text-blue-300" />
            <div className="text-left">
              <p className="text-xs text-white/60">Active Tasks</p>
              <h1 className="text-xl font-bold">
                {allTasksLength - completedTasksLength}
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <h1 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-2xl">📊</span> Progress
            </h1>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              {percentage}%
            </p>
          </div>
          <div className="w-full">
            <input
              type="range"
              disabled
              value={percentage}
              className="w-full cursor-pointer"
              style={{ "--progress": `${percentage}%` }}
            />
          </div>
          {percentage === 100 && allTasksLength > 0 && (
            <p className="mt-2 text-center text-green-400 font-semibold animate-fade-in">
              🎉 All tasks completed!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
