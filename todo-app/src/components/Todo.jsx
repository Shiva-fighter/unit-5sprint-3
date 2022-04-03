import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Todo/action';
import { login_state} from "../login/action"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Todo() {
    const [title, setTitle]=useState("");
    const navigate = useNavigate()
    let login_stat = useSelector((state)=>state.login.authstate);
    console.log("status",login_stat)
   
    useEffect(()=>{
      if(!login_stat ){
        return navigate("/login")
      }
     
    },[login_stat])
    const dispatch = useDispatch();
    const getTodo=()=>{
      axios.get("http://localhost:3002/todos").then((res)=>{
        //console.log(res.data)
        const addTodoaction =addTodo(res.data);
        dispatch(addTodoaction)
      })
    };
    const handle_login=()=>{
      let login = { status : false }
            
      dispatch(login_state(false))
      console.log("logout",login_stat)
     navigate('/login')
    }
    useEffect(()=>{
      getTodo();
    },[])
    const handleAdd=()=>{
      axios.post("http://localhost:3002/todos",{
        title,
        status:false,
        id: new Date().getTime().toString()
      }).then((res)=>{
        getTodo();
        
      })
    }

  return (
    <div>
      <div>
        <button className='btn btn-outline-primary' onClick={ ()=>{

          handle_login();

        } } > Logout </button>
      </div>
        <label > TODO LIST</label>
        <br />
        <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }} />
        <button className='btn btn-primary' onClick={handleAdd} >ADD</button>
    </div>
  )
}

export default Todo