import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* New Tasks */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-emerald-100 border-l-4 border-l-emerald-500 transition-all hover:shadow-md hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{data.taskStats.newTask}</h2>
        <h3 className="text-lg font-semibold text-gray-600">New Tasks</h3>
      </div>

      {/* Active Tasks */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-amber-100 border-l-4 border-l-amber-500 transition-all hover:shadow-md hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{data.taskStats.active}</h2>
        <h3 className="text-lg font-semibold text-gray-600">Active Tasks</h3>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-indigo-100 border-l-4 border-l-indigo-500 transition-all hover:shadow-md hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{data.taskStats.completed}</h2>
        <h3 className="text-lg font-semibold text-gray-600">Completed</h3>
      </div>

      {/* Failed Tasks */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-red-100 border-l-4 border-l-red-500 transition-all hover:shadow-md hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{data.taskStats.failed}</h2>
        <h3 className="text-lg font-semibold text-gray-600">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;