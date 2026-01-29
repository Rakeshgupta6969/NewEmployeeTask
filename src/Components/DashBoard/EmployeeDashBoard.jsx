import React from "react";
import Header from "../BasicRequr/Header";
import TaskListNumber from "../BasicRequr/TaskListNumber";
import TaskListOne from "../TaskList/TaskListOne";


const EmployeeDashBoard = (props) =>{

    return (
       
        <div className="bg bg-gray-800 h-screen p-10">
           
         
           <Header   changeUser  = {props.changeUser} data = {props.data}/>
           <TaskListNumber data =  {props.data} />
           <TaskListOne data =  {props.data}/>


        </div>



    )



}

export default EmployeeDashBoard;