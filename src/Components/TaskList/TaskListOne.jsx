import React from "react";
import AcceptedTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskListOne = ({data}) =>{
   
    return(

    
    <div  id="taskList" className=" flex  overflow-x-auto  items-center justify-between  gap-5  flex-nowrap  mt-10 h-[55%] w-full py-5 px-5">
       
       {data.tasks.map((task,id) =>{  // this is nothing but it is the forLoop on the tasks list;
      
          if(task.active){
            return(
               <AcceptedTask key = {id} data = {task}  />
            )
          }

          if(task.newTask){
            return(
               <NewTask key = {id}  data = {task} />
            )
          }

          if(task.completed){
            return(
               <CompleteTask key = {id}  data = {task} />
            )
          }

          if(task.failed){
            return(
               <FailedTask  key = {id}  data = {task} />
            )
          }



        })} 



  

    </div>


    )


}


export default TaskListOne;
