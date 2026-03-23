import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-2xl shadow-sm border border-red-200 border-t-4 border-t-red-500 p-6 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.taskCategory}
          </span>
          <span className="text-sm font-medium text-gray-500">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{data.taskTitle}</h2>
        <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
          {data.taskDescription}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <button className="w-full bg-red-50 text-red-700 border border-red-200 font-bold py-2.5 px-4 text-sm rounded-xl cursor-default">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;