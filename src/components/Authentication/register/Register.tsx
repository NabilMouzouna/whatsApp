import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterUI = () => {
  return (
    <div className="h-dvh flex justify-center items-center">
        <div className="border-2 border-black w-fit rounded-lg p-4 min-w-96">
            <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon size="2x" icon={faWhatsapp} />
            <h1 className="my-1">WhatsApp Application</h1>
            </div>
            <CredentialsForm/>
            <h1 className=" text-sm my-2">you already have an account?, 
            <Link to="/login" 
            className="font-bold">login</Link>
            </h1>
      </div>
    </div>
  )
}


//!TODO : consider to add Input validation
const CredentialsForm = () => { 
    const form = new FormData()
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [profilePicture , setProfilePicture] = useState("")
    
    function RegisterButton(){
        form.append("username",username)
        form.append("password",password)
        form.append("profilePicture",profilePicture)
    }
    return (
        <form 
        onSubmit={
            (e) => { e.preventDefault() }
        }
        className="grid gap-1">
            <div className="w-28 h-28 rounded-full bg-gray-500 overflow-hidden relative cursor-pointer mx-auto my-2">
                <input type="file" name="profilePic" id="profilePic" 
                onChange={(e) => { setProfilePicture(e.target.value) }}
                className="absolute inset-0 opacity-0 z-10"/>
            </div>
            <label htmlFor="username">Username :</label>
            <input required type="text" id="username" placeholder="Enter your username"
            onChange={(e) => { setUsername(e.target.value) }}
            className="p-2 bg-gray-100 bg-opacity-60 rounded-md border-none text-black text-sm focus:outline-none mb-2"
            />

            <label htmlFor="password">Password</label>
            <input required type="password" id="password" placeholder="Enter your Password"
            onChange={(e) => { setPassword(e.target.value) }}
            className="p-2 bg-gray-100 bg-opacity-60 rounded-md focus:outline-none border-none text-black text-sm"/>
            <button
            className="border-2 mt-5 border-black rounded-md p-2 m-4"
            >Register</button>
        </form>
    )
 }
export default RegisterUI