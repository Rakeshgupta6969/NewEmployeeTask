import React from "react";
import AcceptedTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskListOne = ({ data }) => {
  return (
    <div
      id="taskList"
      className="flex overflow-x-auto gap-6 flex-nowrap w-full py-6 min-h-[400px]"
    >
      {data.tasks.map((task, id) => {
        if (task.active) {
          return <AcceptedTask key={id} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={id} data={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={id} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={id} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskListOne;
