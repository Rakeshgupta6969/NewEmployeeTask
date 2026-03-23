import React from "react";

const AcceptedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-2xl shadow-sm border border-amber-200 border-t-4 border-t-amber-500 p-6 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.taskCategory}
          </span>
          <span className="text-sm font-medium text-gray-500">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{data.taskTitle}</h2>
        <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
          {data.taskDescription}
        </p>
      </div>

      <div className="flex justify-between gap-3 mt-6">
        <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-3 text-sm rounded-xl transition-colors shadow-sm shadow-emerald-500/30">
          Complete Task
        </button>
        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-3 text-sm rounded-xl transition-colors shadow-sm shadow-red-500/30">
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptedTask;