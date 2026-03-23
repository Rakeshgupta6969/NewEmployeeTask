import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [authData, setAuthData] = useContext(AuthContext) || [null, null];

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        
        // Dynamically pull latest data for this employee
        if (userData.role === 'employee' && userData.data) {
          const freshEmployee = authData.employees.find(e => e.firstName === userData.data.firstName);
          if (freshEmployee) {
            setLoggedInUserData(freshEmployee);
          } else {
            setLoggedInUserData(userData.data);
          }
        } else {
          setLoggedInUserData(userData.data)
        }
      }
    }
  }, [authData])

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find((e) => email === e.email && password === e.password)
      if (admin) {
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
        return;
      }

      const employee = authData.employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('user');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return;
      }

      alert("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashBoard changeUser={setUser} />
      ) : user === 'user' ? (
        <EmployeeDashBoard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App;
