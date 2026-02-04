import React, { useState } from "react";

const Header  = (props) =>{

    // const [userName,setUserName] = useState('');
     
    //   if(!data){
    //     setUserName('Admin');
    //   }
    //   else{
    //     setUserName(data.firstName);
    //   }
    
        const logOutUser = () =>{
         
            localStorage.setItem('loggedInUser','');
            props.changeUser('');

            // window.location.reload();


        }

         
    return ( 

       <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium"> Hello <br/> <span className="text-3xl font-semibold"> {props.firstName} </span> </h1>

        <button   onClick={logOutUser}  className="bg-red-400 font-semibold  rounded-b-md  py-2 px-2 ">Log out</button>
       </div>

    )


}

export default  Header;