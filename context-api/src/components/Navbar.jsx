import React, { useContext } from 'react'
import { LoginContext } from "../Contexts/LoginContext"
function Navbar() {
    const {email ,setEmail,password,setPassword,toggleAuth,isAuth, setIsAuth}=useContext(LoginContext)
  return (
    <div>
          <button onClick={()=>{
          (isAuth)? setIsAuth(false) : toggleAuth(email,password)
    
          
        }}>{(isAuth)?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar