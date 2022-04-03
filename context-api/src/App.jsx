import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import { LoginContext } from "./Contexts/LoginContext"
import Profile from './components/Profile'
import Navbar from './components/Navbar'

function App() {
  
  const {isAuth, setIsAuth}=useContext(LoginContext)
  return (
    <div className="App">
  <Navbar/>
    {(isAuth)? <Profile/> :<Login/> }
   


    </div>
  )
}

export default App
