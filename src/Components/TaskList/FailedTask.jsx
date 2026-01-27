import React from "react";

const FailedTask = ({data}) =>{

  return(
    
          <div className="  flex-shrink-0  h-full w-[20%] bg-blue-400 rounded-xl p-3 ">

            <div  className="flex justify-between items-center ">
               <h2 className="flex bg-red-600 p-1  rounded text-sm ">{data.taskCategory}</h2>
               <h2 className=" text-sm">{data.taskDate}</h2>
                
            </div>

            <h2 className="mt-3 text-xl font-semibold">{data.taskTitle}</h2>
            <p className="mt-1 text-sm">{data.taskDescription}</p>

         
           <div className="flex mt-4">

            <button className="bg-red-500 px-2 py-2 rounded-md">Failed</button>


           </div>


        </div>
  )


}

export default FailedTask;