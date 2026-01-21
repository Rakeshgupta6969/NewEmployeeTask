import React from "react";

const TaskListNumber = () =>{

      return(

       <div className="flex justify-between gap-5 screen mt-3">
        
          <div className=" rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2  className="text-3xl font-semibold"> 0 </h2>
        <h3 className="text-3xl font-medium"> new Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2  className="text-3xl font-semibold"> 0 </h2>
        <h3 className="text-3xl font-medium"> new Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2  className="text-3xl font-semibold"> 0 </h2>
        <h3 className="text-3xl font-medium"> new Task   </h3>

          </div>

           <div className=" rounded-xl py-6 px-9 w-[45%] bg-pink-400">
        <h2  className="text-3xl font-semibold"> 0 </h2>
        <h3 className="text-3xl font-medium"> new Task   </h3>

          </div>


       </div>

      )

}



export default TaskListNumber;