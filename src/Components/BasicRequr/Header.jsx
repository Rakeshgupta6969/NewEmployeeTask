import React, { useState } from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload();
  };

  return (
    <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between transition-all hover:shadow-md">
      <div>
        <h1 className="text-xl font-medium text-gray-500">
          Hello, <br />
          <span className="text-3xl font-bold text-gray-900">
            {props.firstName ? props.firstName : "Admin"} 👋
          </span>
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white font-semibold rounded-xl py-2.5 px-6 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98] transition-all duration-300"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;