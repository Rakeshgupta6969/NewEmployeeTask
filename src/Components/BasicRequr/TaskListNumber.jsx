import React from "react";

const TaskListNumber = ({data}) =>{

      return(

       <div className="flex justify-between gap-5 screen mt-3">
        
          <div className=" rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2  className="text-3xl font-semibold"> {data.taskStats.newTask}</h2>
        <h3 className="text-3xl font-medium"> new Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2  className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-3xl font-medium"> Accepted Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2  className="text-3xl font-semibold"> {data.taskStats.failed}</h2>
        <h3 className="text-3xl font-medium"> failed Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-pink-400">
        <h2  className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-3xl font-medium"> Completed Task   </h3>

          </div>


       </div>

      )

}



export default TaskListNumber;