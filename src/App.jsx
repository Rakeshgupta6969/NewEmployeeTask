import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/employeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

      {/* <Login/>   */}
      {/* <EmployeeDashBoard/> */}
      <AdminDashBoard/>


    

  
    </>
  )
}

export default App
