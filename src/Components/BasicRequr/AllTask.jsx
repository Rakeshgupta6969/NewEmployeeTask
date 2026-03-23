import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [authData] = useContext(AuthContext) || [null, null];

  return (
    <div className="bg-white shadow-sm p-6 lg:p-8 rounded-2xl border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Employee Task Stats</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-gray-50 py-4 px-6 rounded-xl mb-4 border border-gray-200">
            <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Employee Name</h2>
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider text-center">New Task</h3>
            <h5 className="text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Active Task</h5>
            <h5 className="text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Completed</h5>
            <h5 className="text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Failed</h5>
          </div>

          {/* Table Body */}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2 hide-scrollbar">
            {authData && authData.employees && authData.employees.map((emp, id) => {
              return (
                <div key={id} className="grid grid-cols-5 py-3 px-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm bg-white transition-all duration-200 items-center">
                  <h2 className="text-base font-semibold text-gray-900">{emp.firstName}</h2>
                  <div className="text-center">
                    <span className="inline-block min-w-8 px-2 py-1 bg-emerald-100 text-emerald-700 font-bold rounded-md text-sm">
                      {emp.taskStats.newTask}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block min-w-8 px-2 py-1 bg-amber-100 text-amber-700 font-bold rounded-md text-sm">
                      {emp.taskStats.active}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block min-w-8 px-2 py-1 bg-indigo-100 text-indigo-700 font-bold rounded-md text-sm">
                      {emp.taskStats.completed}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block min-w-8 px-2 py-1 bg-red-100 text-red-700 font-bold rounded-md text-sm">
                      {emp.taskStats.failed}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;