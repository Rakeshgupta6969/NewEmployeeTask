import React from "react";


const CreateTask = () =>{

       return(
<div class="min-h-screen flex items-center justify-center ">
  <form class="bg-gray-500 shadow-lg rounded-xl p-6 w-full max-w-md space-y-4">
    
    <h2 class="text-2xl font-bold text-center text-gray-800">
      Create New Task
    </h2>

    
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1">
        Task Title
      </label>
      <input
        type="text"
        placeholder="Enter your Task Title"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

  
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1">
        Description
      </label>
      <textarea
        placeholder="About your task"
        rows="3"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1">
        Date
      </label>
      <input
        type="date"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

   
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1">
        Assign To
      </label>
      <input
        type="text"
        placeholder="Rakesh Gupta"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1">
        Category
      </label>
      <input
        type="text"
        placeholder="Project"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

   
    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
    >
      Create Task
    </button>

  </form>
</div>

       )

}


export default CreateTask;