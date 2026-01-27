import React from "react";


const AcceptedTask = ({data}) =>{

         
 

    return(
        <div className="  flex-shrink-0  h-full w-[20%] bg-red-400 rounded-xl p-3 ">

            <div  className="flex justify-between items-center ">
               <h2 className="flex bg-red-600 p-1  rounded text-sm ">{data.taskCategory}</h2>
               <h2 className=" text-sm">{data.taskDate}</h2>
                
            </div>

            <h2 className="mt-3 text-xl font-semibold">{data.taskTitle}</h2>
            <p className="mt-1 text-sm">{data.taskDescription}</p>
           
           <div  className="flex justify-between mt-3">
            
            <button
             className="bg-green-500 py-2 px-2 text-sm rounded-md "

            >Mark as Accepted</button>

            <button
            className="bg-red-500 py-2 px-2 text-sm rounded-md"

            >Mark as Failed</button>

           </div>


        </div>
    )


} 

export default AcceptedTask;