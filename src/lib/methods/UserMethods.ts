import { Users } from "../placeholder-data/UsersData/Users";
import { RoomShcema,UserSchema } from "../dataTypes";
//----------------------------------------------------------------
// create User By his ID
export function getUserById(userId:string) {
    return Users.find(user => user.userId === userId)
}


//----------------------------------------------------------------
 // get All Contacts - returns an array of contacts

export function getAllContacts(userId:string) {
    const targetedUser = getUserById(userId)
    const ListOfContacts =  targetedUser?.contacts.map((contact) => getUserById(contact))
    return ListOfContacts
}
//----------------------------------------------------------------
 // get All Contacts - returns an array of contacts IDs for the userId
 export function getAllRooms(userId:string) : string[] | undefined{
     const targetedUser = Users.find(user => user.userId === userId)
     return targetedUser?.chatRooms
    }

// chatRoom in common between the user and the clicked contact
export function inCommonChatRoom(userId:string){
    const myMetadata = window.localStorage.getItem("userMetadata")
    const parsedMetadata =myMetadata && JSON.parse(myMetadata)
    const targetedContact = getUserById(userId)
    if(parsedMetadata && targetedContact) {
        return targetedContact.chatRooms.find(room => parsedMetadata.chatRooms.includes(room));
    }
}