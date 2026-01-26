import React from "react";

const Header  = ({data}) =>{
         
    return (

       <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium"> Hello <br/> <span className="text-3xl font-semibold">{data. firstName} </span> </h1>

        <button className="bg-red-400 font-semibold  rounded-b-md  py-2 px-2 ">Log out</button>
       </div>

    )


}

export default  Header;