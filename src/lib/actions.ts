import { RoomShcema, UserSchema } from "./dataTypes"
import { Users } from "./placeholder-data/UsersData/Users"
import { createRoom } from "./methods/RoomMethods"
export function isAuthenticated(){
    const userMetadata = window.localStorage.getItem("userMetadata")
    if(userMetadata) return JSON.parse(userMetadata)
    else return undefined 
}

//----------------------------------------------------------------
// create new user (Registration)
type newUserArgs = {
    username : string,
    password : string,
    biography : string,
    profilePictureURL : string
  }
export function createUser({username,password,biography,profilePictureURL = "Default Picture"}: newUserArgs) : UserSchema{
    const userId = crypto.randomUUID().toString()
    const newUser : UserSchema = {
        userId,
        username,
        password,
        biography,
        profilePictureURL,
        chatRooms:[],
        contacts:[]
    }
    Users.push(newUser)
    return newUser
}

//----------------------------------------------------------------
// find user by username and password (Login)
export function Login(username:string,password:string): undefined | UserSchema{
    const targetedUser : UserSchema | undefined = Users.find(user => user.username === username)
    if(!targetedUser) {
        alert("can't find this username")
        return undefined
    }
    else if(targetedUser.password !== password) {
        alert("your password is incorrect")
        return undefined
    }
    else {
        window.localStorage.setItem("userMetadata",JSON.stringify(targetedUser))
        alert("Login successful")
        return targetedUser
    }
}
//----------------------------------------------------------------
// Create New Room then return it
export function addRoom(senderId:string, recieverId:string): RoomShcema{
    const newRoom = createRoom(senderId,recieverId)
    Users.forEach(user => {
        if(user.userId === senderId || user.userId === recieverId) user.chatRooms.push(newRoom.roomID)
    })
    return newRoom
}