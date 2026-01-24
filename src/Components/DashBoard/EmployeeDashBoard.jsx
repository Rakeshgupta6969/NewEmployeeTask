import React from "react";
import Header from "../BasicRequr/Header";
import TaskListNumber from "../BasicRequr/TaskListNumber";
import TaskListOne from "../TaskList/TaskListOne";


const EmployeeDashBoard = ({data}) =>{

    return (
       
        <div className="bg bg-gray-800 h-screen p-10">
           
         
           <Header  data = {data}/>
           <TaskListNumber data = {data} />
           <TaskListOne data = {data}/>


        </div>



    )



}

export default EmployeeDashBoard;