import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'
import TodoOne from './components/TodoOne'
import { useDispatch, useSelector } from "react-redux";
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)
let authState= useSelector((state) => state.login.authState)

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={
   
        <><Todo/>     <TodoList/> </> 

        }>    </Route>
    <Route path='/todo/:id' element={<TodoOne/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </div>
  )
}

export default App
