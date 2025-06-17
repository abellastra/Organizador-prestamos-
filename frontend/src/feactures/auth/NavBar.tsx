
import React from "react"
import { useNavigate } from "react-router-dom"
export const NavBar=()=>{
    const navigate=useNavigate()
return(
    <nav>
        <button onClick={()=>{navigate('/register')}}> Sign Up </button>
        <button onClick={()=>{navigate('/login')}}>Sign In </button>
        <button onClick={()=>{navigate('/dashboard')}}> Dashboard </button>

    </nav>
)

}