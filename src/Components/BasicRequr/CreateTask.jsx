import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [TaskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [taskCategory, setCategory] = useState('');

  const [authData, setAuthData] = useContext(AuthContext) || [null, null];

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = { 
      taskTitle, 
      taskDate, 
      taskDescription: TaskDescription, 
      assignTo, 
      taskCategory, 
      active: false, 
      newTask: true, 
      failed: false, 
      completed: false 
    };

    const data = JSON.parse(localStorage.getItem('Employees'));

    if (data) {
      data.forEach((emp) => {
        if (assignTo === emp.firstName) {
          emp.tasks.push(taskObj);
          if (emp.taskStats) {
            emp.taskStats.newTask += 1;
          }
        }
      });
      localStorage.setItem('Employees', JSON.stringify(data));
      
      if (setAuthData) {
        setAuthData(prev => {
          if (!prev) return prev;
          return { ...prev, employees: data };
        });
      }
    }

    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 lg:p-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Create New Task</h2>
        <p className="text-gray-500 text-sm mt-1">Assign new responsibilities to your team members</p>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-5">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              required
              placeholder="e.g. Design Homepage UI"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-50 text-gray-900 transition-all duration-300"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-50 text-gray-900 transition-all duration-300"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              required
              placeholder="e.g. Rakesh Gupta"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-50 text-gray-900 transition-all duration-300"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
              Category
            </label>
            <input
              value={taskCategory}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              required
              placeholder="e.g. Development"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-50 text-gray-900 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col space-y-5">
          <div className="group flex-1 flex flex-col">
            <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-emerald-600">
              Description
            </label>
            <textarea
              value={TaskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              placeholder="Detailed description of the task..."
              className="w-full flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-gray-50 text-gray-900 transition-all duration-300 resize-none min-h-[200px]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98] transition-all duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;