import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TodoOne() {
    const {id}=useParams();
    const [item ,setItem] =useState({})
    useEffect(() => {
      axios.get(`http://localhost:3002/todos/${id}`).then((res)=>{
        setItem(res.data);
      })
    
   
    }, [])
    
  return (
    <div>
        <h3>TODO details</h3>

        <h5 key={item.id}>{item.title}-{item.id}</h5>
        
    </div>
  )
}

export default TodoOne