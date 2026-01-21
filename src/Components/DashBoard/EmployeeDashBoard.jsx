import React from "react";
import Header from "../BasicRequr/Header";
import TaskListNumber from "../BasicRequr/TaskListNumber";
import TaskListOne from "../TaskList/TaskListOne";


const EmployeeDashBoard = () =>{

    return (
        
        <div className="bg bg-gray-800 h-screen p-10">
          
           <Header/>
           <TaskListNumber/>
           <TaskListOne/>


        </div>



    )



}

export default EmployeeDashBoard;