import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/employeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData,setLoggedInUserData] = useState(null)
   const authData = useContext(AuthContext);

   
  //  useEffect(()=>{

     
  //  if(authData){
  //   const loggedInUser = localStorage.getItem("loggedInUser");

  //   if(loggedInUser){
  //     setUser(loggedInUser.role);
  //   }
  //  }


  //  },[])

 
  
  const handleLogin = (email,password) =>{
         
      // here during the login we check the filled data is valid or not according to our local storage


       if(authData){
         
        const admin = authData.admin.find((e) => email == e.email && password == e.password)
     

           if(admin){
               setUser('admin');

        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
           }
       

      }

       if(authData){

        const employee =  authData.employees.find((e) => email == e.email && password == e.password)

      if(employee){
          setUser('user');
          setLoggedInUserData(employee);
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
      }
   
      }


      else{
        alert("Invalid Credentials");
      }

  }




  // useEffect(() =>{
  //   // setLocalStorage();
  //   getLocalStorage();
  // },[])


    


  return (
    <>
  
      {!user ? <Login  handleLogin={handleLogin}/> : ''}

      {user == 'admin' ?    <AdminDashBoard/> : ( user == 'user' ? <EmployeeDashBoard   data = {loggedInUserData}/>:null)}
      {/* <EmployeeDashBoard/> */}
       {/* <AdminDashBoard/>  */}


    

  
    </>
  )
}

export default App;
