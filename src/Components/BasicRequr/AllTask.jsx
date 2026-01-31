import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () =>{


      
    const authData = useContext(AuthContext);

  

    return(

     <div   className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">


       <div className="bg-blue-500 py-3 px-3 flex justify-between rounded mb-4">
      
      <h2 className="w-1/5 text-lg font-medium text-white">EmployeeName</h2>
      <h3 className="w-1/5 text-lg font-medium text-white">NewTask</h3>
      <h5 className="w-1/5 text-lg font-medium text-white">AcceptedTask</h5>
      <h5 className="w-1/5 text-lg font-medium text-white">CompletedTask</h5>
      <h5 className="w-1/5 text-lg font-medium text-white">FailedTask </h5>


     </div>


       
     <div  className=" overflow-auto">
      {
         authData.employees.map((emp,id)=>{

              
          return(
              <div key = {id} className="  border border-blue-600 py-3 px-3 flex justify-between rounded-md mb-4">
      
      <h2 className="w-1/5 text-lg font-medium text-white ">{emp.firstName}</h2>
      <h3 className="w-1/5 text-lg font-medium text-green-400">{emp.taskStats.newTask}</h3>
      <h5 className="w-1/5 text-lg font-medium  text-red-600">{emp.taskStats.active}</h5>
      <h5 className="w-1/5 text-lg font-medium text-pink-600">{emp.taskStats.completed}</h5>
      <h5 className="w-1/5 text-lg font-medium text-blue-300">{emp.taskStats.failed}</h5>



     </div>
          )

         })}

     </div>


    
     </div>

    )
}


export default AllTask;