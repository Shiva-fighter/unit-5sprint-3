import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../Todo/action';
import { Link } from "react-router-dom";
function TodoList() {
  let todos = useSelector(state=> state.todos.todos)
  
  console.log("test",todos)
  const dispatch = useDispatch();
  const getTodo=()=>{
    axios.get("http://localhost:3002/todos").then((res)=>{
     // console.log(res.data)
      const addTodoaction =addTodo(res.data);
      dispatch(addTodoaction)
    })
  };
  const toggleStatus=(id,i)=>{
    let item=todos[id];
    // console.log(item)
    if(item.status){
      item.status=false;
    }else{
      item.status=true;
    }
axios.put(`http://localhost:3002/todos/${i}`,item).then((res)=>{
  getTodo();
})
  }
  const del_Todo=(id)=>{
    axios.delete(`http://localhost:3002/todos/${id}`).then((res)=>{
      getTodo();
    })
  }
  return (
   <>
   { (todos) ?  <div>
        <label > TODOs</label>
        <br />
        {todos.map((e,index)=> <> <Link to={`/todo/${e.id}`} key={e.id} >   {e.title} </Link> 
        <button  className='btn btn-warning m-2' onClick={()=>{
          toggleStatus(index,e.id)
        }}>{(e.status?"Completed" : "Incomplete")}</button>
        <button className='btn btn-danger' onClick={()=>{
          del_Todo(e.id)
        }}>delete</button></>)}
        
    </div> : "loading"}
   </>
  )
}

export default TodoList