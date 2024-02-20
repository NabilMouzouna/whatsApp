//*! I have to do something about the mess here
import { useParams } from 'react-router-dom'
import { addMessage,getChatRoomById, getParticipantsIds } from '../../lib/methods/RoomMethods' 
import { faMagnifyingGlass, faPaperPlane, faPhone, faPlus, faVideo } from "@fortawesome/free-solid-svg-icons"
import Header from "../ui/Header"
import BG from "../../assets/whatsapp-bg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { getUserById } from '../../lib/methods/UserMethods'


//*!TODO : user metadata will be replaced with real metadata

const ChatRoom = () => {
    const { roomId } = useParams()
    const chatRoom = roomId && getChatRoomById(roomId)
    const participants =roomId && getParticipantsIds(roomId)
    const reciever = participants && getUserById(participants[0])
    const [sendButtonClicked, setSendButtonClicked] = useState(false)
    const backgroundImage = {
        backgroundImage: `url(${BG})`,
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
    }
    useEffect(() => { 
        getChatRoomById(roomId||"")
     },[sendButtonClicked])
  if(reciever && chatRoom) return (
    <div style={backgroundImage} className="chatroom bg-chatRoom w-2/3 h-dvh overflow-y-scroll text-messageColor relative">
      <Header component={<RecieverProfile username={reciever.username} profilePicture={reciever.profilePictureURL}/>} icons={[faVideo,faPhone, faMagnifyingGlass]}/>
      <div className='py-16 px-3'>
        {chatRoom[0].messages.map(message => (
            <div key={message.messageID} className={`m-1 flex ${(message.senderID !== reciever.userId)?"justify-end":"justify-start"} `}>
                <div className=' p-2 bg-bodyColor text-white w-fit flex gap-3 rounded-lg'>
                    <div className='text-sm'>{message.content}</div>
                    <div className='text-[9px] self-end'>{message.timestamp}</div>
                </div>
            </div>
        ))}
      </div>
      <MessageInput btnClicked={setSendButtonClicked}/>
    </div>
  )
}


type MessageInputProps = {
    btnClicked : CallableFunction}

const MessageInput = (props:MessageInputProps) => {
  const userMetadata = JSON.parse(window.localStorage.getItem("userMetadata") || "")
    const [msgContent, setMsgContent] = useState("")
    const { roomId } = useParams()
    return (
        <div className='absolute bottom-0 right-0 w-full bg-headerColor h-14 p-2 flex items-center text-white'>
            <div className='px-2 text-messageColor rounded-full p-2 hover:bg-gray-700 hover:bg-opacity-40 mx-2'><FontAwesomeIcon size='xl' icon={faPlus} /></div>
            <input 
            className='flex-1 py-2 px-3 rounded-full bg-bodyColor outline-none' 
            type="text" 
            onChange={(e) => { 
                setMsgContent(e.target.value) 
                props.btnClicked(false)
            }}
            value={msgContent}
            />
            <div 
            onClick={() => { 
                ((msgContent !== "") && (roomId != undefined)) && addMessage(roomId, userMetadata.userId, msgContent)
                setMsgContent("")
                props.btnClicked(true)
             }}
            className='px-2 bg-green-500 w-10 h-10 rounded-full grid place-content-center cursor-pointer my-1 mx-2'><FontAwesomeIcon icon={faPaperPlane} /></div>
        </div>
    )
 }

 type RecieverProfileProps ={
  username : string | undefined,
  profilePicture : string | undefined
}
const RecieverProfile = (props:RecieverProfileProps) => {
  return (
    <div className="flex items-center gap-5 my-2 p-2 rounded-md cursor-default hover:bg-gray-700 hover:bg-opacity-30">
      <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-500">
        {/* //TODO: need to add profile image in case there is a profile */}
        <img className="object-cover h-full w-full" src={props.profilePicture} alt={`Profile picture of ${props.username}`} />
      </div>
        <h1 className="text-white font-bold">{props.username}</h1>
      </div>
  )
}


export default ChatRoom