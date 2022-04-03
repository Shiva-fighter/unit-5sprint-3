import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions';
import { useDispatch, useSelector } from "react-redux";
export const Todo = () => {
  const dispatch= useDispatch();
  const [inputData, setInputData] = useState("");
  const list = useSelector((state)=> state.todoReducers.list)
  return (
    <div className='mt-5'>
        <input type="text" className='w-3' value={inputData} onChange={(e)=>{
          setInputData(e.target.value)
        }}/>
        <button className='btn btn-primary ' onClick={()=>{
          dispatch(addTodo(inputData)),setInputData("")
        }}>ADD</button>
        <div className='showitems'>
          {
            list.map((e)=>{
              return  <div className='eachItem' key={e.id}>
              <h3>{e.data}</h3>
              <button className='btn btn-danger' onClick={()=>{
                dispatch(deleteTodo(e.id)),setInputData('')
              }}>delete</button>
            </div>
            })
          }
         

        </div>
    </div>
  )
}
