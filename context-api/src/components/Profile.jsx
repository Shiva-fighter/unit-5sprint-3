import React, { useContext } from 'react'
import { LoginContext } from "../Contexts/LoginContext"

function Profile() {
    const {isAuth, setIsAuth,token}=useContext(LoginContext)
  return (
    <div>{token}</div>
  )
}

export default Profile