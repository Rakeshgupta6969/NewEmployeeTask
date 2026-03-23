import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-2xl shadow-sm border border-emerald-200 border-t-4 border-t-emerald-500 p-6 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.taskCategory}
          </span>
          <span className="text-sm font-medium text-gray-500">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{data.taskTitle}</h2>
        <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
          {data.taskDescription}
        </p>
      </div>

      <div className="flex justify-between mt-6">
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 text-sm rounded-xl transition-colors shadow-sm shadow-emerald-500/30">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
