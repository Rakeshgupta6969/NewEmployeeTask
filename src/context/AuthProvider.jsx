import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    // initialize local storage if empty
    if (!localStorage.getItem('Employees')) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[UserData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;