import React, { useState } from "react";


const CreateTask = () =>{



   const [taskTitle,setTaskTitle] = useState('');
   const [TaskDescription,setTaskDescription] = useState('');
   const [taskDate,setTaskDate] = useState('');
   const [assignTo,setAssignTo] = useState('');
   const [taskCategory,setCategory] = useState('');


   
   const [newTask,setNewTask] = useState({})
 
    const submitHandler = (e) =>{

        e.preventDefault();
        
        

        //  these are because of the to get the new form after the creation of the task.
        setAssignTo('');
        setCategory('');
        setTaskDate('');
        setTaskTitle('');
        setTaskDescription('');


      setNewTask({taskTitle,taskDate,TaskDescription,assignTo,taskCategory,active:false ,newTask:true,failed:false,completed:true})
      
       const data =  JSON.parse(localStorage.getItem('Employees'));
      

           data.forEach((emp) =>{
               
               if(assignTo == emp.firstName){
                 
                  emp.tasks.push(newTask);
                  
                  

               }
           })
        
           localStorage.setItem('Employees',JSON.stringify(data));

          console.log(data);

    }


       return(
<div className="min-h-screen flex items-center justify-center ">
  <form 
    
    onSubmit={(e) =>{
      submitHandler(e)
    }}
  
  
  className="bg-gray-500 shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
    
    <h2 className="text-2xl font-bold text-center text-gray-800">
      Create New Task
    </h2>

    
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Task Title
      </label>
      <input
        
        value = {taskTitle}
        onChange={(e) =>{
         
          setTaskTitle(e.target.value);

        }}
        
        type="text"
        placeholder="Enter your Task Title"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

  
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Description
      </label>
      <textarea
         value = {TaskDescription}
        onChange={(e) =>{
         
          setTaskDescription(e.target.value);

        }}
        placeholder="About your task"
        rows="3"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Date
      </label>
      <input
         
           
        value = {taskDate}
        onChange={(e) =>{
         
          setTaskDate(e.target.value);

        }}
        
         
        type="date"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

   
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Assign To
      </label>
      <input
        
          
        value = {assignTo}
        onChange={(e) =>{
         
          setAssignTo(e.target.value);

        }}
        
        type="text"
        placeholder="Rakesh Gupta"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Category
      </label>
      <input
         
           
        value = {taskCategory}
        onChange={(e) =>{
         
          setCategory(e.target.value);

        }}
        
        type="text"
        placeholder="Project"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

   
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
    >
      Create Task
    </button>

  </form>
</div>

       )

}


export default CreateTask;