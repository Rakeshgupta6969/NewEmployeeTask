


// import React, { useState } from "react";

// const Login = ({handleLogin}) =>{

//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');

//   const submitHandler = (e) =>{
    
//       e.preventDefault(); //here the value of e is prevented in the console function
//        handleLogin(email,password);
//        setEmail('');
//        setPassword('');

//   }

//    return(

//    <div className="w-full min-h-screen flex items-center justify-center">
  
//   <div className="w-full max-w-md bg-white  rounded-2xl shadow-lg p-8">
    
    

//     <form 
      
//       onSubmit={(e)=>{
//            submitHandler(e);
//       }}
    
//     className="flex flex-col gap-4">
      
//       <input
  
          
//        value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   className="w-full px-4 py-2 
//              bg-white 
//              text-black 
//              caret-black 
//              opacity-100 
//              border border-gray-300 rounded-lg"
//   placeholder="Enter your email"

//       />

//       <input

       
//          value={password}

//        onChange={(e) =>{
       
//           setPassword(e.target.value);
          

//        }}



//          required
//         type="password"
//         placeholder="Enter your password"
//         className="w-full px-4 py-2 
//              bg-white 
//              text-black 
//              caret-black 
//              opacity-100 
//              border border-gray-300 rounded-lg"
//       />

//       <button
//         className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg
//                    hover:bg-green-600 transition duration-300"
//       >
//         Sign In
//       </button>

//     </form>
//   </div>

// </div>


//    )

// }

// export default Login;


import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center 
                 bg-cover bg-center relative"
     
    >

         {/* Sign Up Button */}
      <button
        className="absolute top-6 right-6 z-20 
                   bg-green-500 text-white px-6 py-2 
                   rounded-lg font-semibold
                   hover:bg-green-600 transition duration-300"
      >
        Sign Up
      </button>


      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Header */}
        <h1 className="text-white text-3xl font-semibold text-center mb-6">
          Welcome <br />
          <span className="text-green-400">Manage Your Employees</span>
        </h1>

        {/* Login Card (UNCHANGED SIZE) */}
        <div className="w-full bg-white rounded-2xl shadow-lg p-8">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 
                         bg-white text-black caret-black 
                         border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 
                         bg-white text-black caret-black 
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
    </div>
  );
};

export default Login;
