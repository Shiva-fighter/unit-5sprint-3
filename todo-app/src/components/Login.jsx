import React, { useState } from 'react'
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { login_state} from "../login/action"
import { useNavigate} from 'react-router-dom';

function Login() {
    let login_stat = useSelector((state)=>state.login.authstate);
    console.log("status",  login_stat);
    let dispatch = useDispatch();
    const navigate = useNavigate()
    let [email , setEmail] = useState(null)
    let [password ,setPassword] = useState(null)
    const handle_login=(email , password)=>{
        console.log(email,password)
        let details= {
            email : email ,
            password :password
        }
        axios.post("https://reqres.in/api/login", details).then((res)=>{
            
            
            dispatch(login_state(true))
            console.log("login success",login_stat)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            alert("Enter Correct Credentials")
        })
    }
  return (
    <div>
        <h2>Todo App</h2>
        <p>Please Login</p>
        <div className='border w-50 mx-auto '>
        <label >Email</label> 
        <br />
        <input type="email" value={email} className='m-3' onChange={(e)=>{
            setEmail(e.target.value);
        }} />
        <br />
        <br />
        <label htmlFor="">Password </label>
        <br />
        <input type="text" value={password}  className='m-3' onChange={(e)=>{
            setPassword(e.target.value)
        }} />

        <br />

        <button className='btn btn-outline-primary' onClick={()=>{
            handle_login(email,password);
        }} >Submit</button>
        </div>
       

    </div>
  )
}

export default Login