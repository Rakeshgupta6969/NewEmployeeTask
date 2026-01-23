


import React, { useState } from "react";

const Login = ({handleLogin}) =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  const submitHandler = (e) =>{
    
      e.preventDefault(); //here the value of e is prevented in the console function
       handleLogin(email,password);
       setEmail('');
       setPassword('');

  }

   return(

   <div className="w-full min-h-screen flex items-center justify-center">
  
  <div className="w-full max-w-md bg-white  rounded-2xl shadow-lg p-8">
    
    

    <form 
      
      onSubmit={(e)=>{
           submitHandler(e);
      }}
    
    className="flex flex-col gap-4">
      
      <input
  
          
       value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 py-2 
             bg-white 
             text-black 
             caret-black 
             opacity-100 
             border border-gray-300 rounded-lg"
  placeholder="Enter your email"

      />

      <input

       
         value={password}

       onChange={(e) =>{
       
          setPassword(e.target.value);
          

       }}



         required
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 
             bg-white 
             text-black 
             caret-black 
             opacity-100 
             border border-gray-300 rounded-lg"
      />

      <button
        className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg
                   hover:bg-green-600 transition duration-300"
      >
        Sign In
      </button>

    </form>
  </div>

</div>


   )

}

export default Login;