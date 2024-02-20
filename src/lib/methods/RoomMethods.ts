import { message } from "../dataTypes";
import { Rooms } from "../placeholder-data/RoomsData/Rooms";
import { RoomShcema } from "../dataTypes";
// Get room by Id
export function getChatRoomById(...roomsId:string[]) {
  const filteredRoom = Rooms.filter(room => {
    return roomsId.includes(room.roomID)
  });
  return filteredRoom
}
//Create room and return it
export function createRoom(senderId :string,recieverId:string){
  const newRoom : RoomShcema = {
    roomID: Math.random().toString(16).substr(2),
    participants: [senderId,recieverId],
    messages:[]
  }
  Rooms.push(newRoom)
  return newRoom
}
// send a new Message to the room
export function addMessage(roomId :string,senderID:string, content:string) :void{
    const randomId = Math.random().toString(16).substr(2)
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const newMessage : message = {
      messageID: randomId,
      senderID,
      timestamp: `${hours}:${minutes}`,
      content
    }
    getChatRoomById(roomId)[0]?.messages.push(newMessage)
}
// get all participants in the chat room without including the myself
export function getParticipantsIds(roomId:string) {
  const targetedRoom = getChatRoomById(roomId)
  const userMetadata = window.localStorage.getItem ("userMetadata")
  if(userMetadata) {
    const parsedMetadata = JSON.parse(userMetadata)
    const newParticipantsList = targetedRoom[0].participants.filter(participant => participant !== parsedMetadata.userId)
    return newParticipantsList
}}