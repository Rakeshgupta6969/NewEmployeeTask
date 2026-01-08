import React from "react";


const Login = () =>{

   return(

     <div className="flex item-center justify-center">
      

      <div className="border-2 border-red-500">
      

      <form className="flex justify-center items-center flex-col">


    <input  type = "email"  placeholder = "Enter Your Email"/>
    <input  type = "password" placeholder = "Enter Your Password"/>

      </form>

       

      </div>



     </div>

   )

}

export default Login;