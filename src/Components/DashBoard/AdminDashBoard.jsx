import React from "react";
import Header from "../BasicRequr/Header";
import CreateTask from "../BasicRequr/CreateTask";
import AllTask from "../BasicRequr/AllTask";

const AdminDashBoard = (props) =>{
    
     return(

      <div className="p-5 h-screen w-full">

      <Header   changeUser = {props.changeUser}   />

       <CreateTask/>

       <AllTask/>
 








    



      </div>

     )



}

export default AdminDashBoard;