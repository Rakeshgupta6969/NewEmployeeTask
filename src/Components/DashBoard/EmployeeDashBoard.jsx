import React from "react";
import Header from "../BasicRequr/Header";
import TaskListNumber from "../BasicRequr/TaskListNumber";
import TaskListOne from "../TaskList/TaskListOne";

const EmployeeDashBoard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <Header changeUser={props.changeUser} data={props.data} firstName={props.data?.firstName} />
        <TaskListNumber data={props.data} />
        <TaskListOne data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashBoard;