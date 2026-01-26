import React from "react";


const AcceptedTask = () =>{

    
    return(
        <div className="  flex-shrink-0  h-full w-[20%] bg-red-400 rounded-xl p-3 ">

            <div  className="flex justify-between items-center ">
               <h2 className="flex bg-red-600 p-1  rounded text-sm ">High</h2>
               <h2 className=" text-sm">21 Jan 2026</h2>
                
            </div>

            <h2 className="mt-3 text-xl font-semibold">Make your React Project</h2>
            <p className="mt-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic magni nemo rerum labore deleniti.</p>
           
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