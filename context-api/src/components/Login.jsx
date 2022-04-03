import { useContext } from "react"
import { LoginContext } from "../Contexts/LoginContext"

const Login = () => {
  const {email ,setEmail,password,setPassword,wrongdetails,toggleAuth,isAuth, setIsAuth}=useContext(LoginContext)
  return (
    <div style={{"textAlign":"left","margin":"auto"}}><br />
    <br />

        <label htmlFor="">Email</label>
        <br />
        <input type="text" placeholder="email" onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" placeholder="password" onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <br />
        <br />
        {(wrongdetails)?"Try correct credentials" :""}

      
    </div>
  )
}

export default Login