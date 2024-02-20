import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Login } from "../../../lib/actions"


const LoginUI = () => {
  return (
    <div className="h-dvh flex justify-center items-center">
        <div className="border-2 border-black w-fit rounded-lg p-4 min-w-96">
            <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon size="4x" icon={faWhatsapp} />
            <h1 className="my-3 text-2xl">WhatsApp Application</h1>
            </div>
            <CredentialsForm/>
           <h1 className=" text-sm my-2">you don't have an account?, 
            <Link to="/register" className="font-bold">register</Link>
            </h1>
      </div>
    </div>
  )
}



//!TODO : consider to add Input validation
const CredentialsForm = () => { 
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    function handleLogin(){
        Login(username,password) && navigate("/")
    }
    return (
        <form 
        onSubmit={
            (e) => { e.preventDefault() }
        }
        className="grid gap-1">
            <label htmlFor="username">Username :</label>
            <input required type="text" id="username" placeholder="Enter your username"
            onChange={(e) => { 
                setUsername(e.target.value)
             }}
            className="p-2 bg-gray-100 bg-opacity-60 rounded-md border-none text-black text-sm focus:outline-none mb-2"
            />
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" placeholder="Enter your Password"
            onChange={(e) => { 
                setPassword(e.target.value)}}
            className="p-2 bg-gray-100 bg-opacity-60 rounded-md focus:outline-none border-none text-black text-sm"/>
            <button
            onClick={handleLogin}
            className="border-2 mt-5 border-black rounded-md p-2 m-4"
            >Login</button>
        </form>
    )
 }
export default LoginUI