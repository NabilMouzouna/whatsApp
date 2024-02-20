import { Link } from "react-router-dom";
import { getAllContacts, inCommonChatRoom } from "../../lib/methods/UserMethods"
import { addRoom } from "../../lib/actions";

type ModelProps = {
  openedController: CallableFunction;
  openState: Boolean;
};
type ContactProps = {
  openedController: CallableFunction,
  username : string,
  userId : string
  bio : string,
  profilePicture : string
}
const ContactsModel = (props: ModelProps) => {
  const me = JSON.parse(window.localStorage.getItem("userMetadata")||"")
  const Users = getAllContacts(me.userId)
  return (
    <div className="fixed backdrop-blur-sm inset-0 py-14 z-10">
      <div className="mx-auto py-2 px-4 w-1/3 h-full bg-asideColor bg-opacity-95 shadow-sm shadow-black">
        <nav>
          <div>
            <span
              onClick={() => {
                props.openedController(false);
              }}
              className=" py-2 px-3 cursor-pointer text-sm text-start text-red-400 hover:bg-gray-700 hover:bg-opacity-30"
            >
              close
            </span>
          </div>
          <div className="my-2 flex items-center text-sm">
            <input
              type="text"
              className="my-2 py-1 px-2 rounded-md border-[.5px] border-messageColor bg-transparent text-messageColor outline-none text-xs flex-1"
              placeholder="Add new contact By ID"
            />
            <button className="mx-2 px-2 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 text-messageColor">
              Add Contact
            </button>
          </div>
        </nav>
        {/* * Contact Container  */}
        <div className="px-2 w-full h-5/6 overflow-y-scroll">
          {Users && Users.map((user) => {
           if(user) return  <ContactWidget
           key={user.userId} 
           userId={user.userId} 
           openedController={props.openedController}
           username={user.username} 
           bio={user.biography} 
           profilePicture={user.profilePictureURL}

           />
          })}
        </div>
      </div>
    </div>
  );
};
const ContactWidget = (props:ContactProps) => {
  const roomId = inCommonChatRoom(props.userId)
  const me = JSON.parse(window.localStorage.getItem("userMetadata")||"")
  const newRoom = addRoom(me.userId, props.userId)
  return (
    <Link 
    onClick={() => { props.openedController(false) }}
    to={`/messages/${roomId? roomId : newRoom.roomID}`} 
    className="flex items-center gap-5 my-2 p-2 rounded-md cursor-default hover:bg-gray-700 hover:bg-opacity-30">
      <div className="w-12 h-12 overflow-hidden rounded-full bg-gray-500">
        <img className="object-cover h-full w-full" src={props.profilePicture} alt={`Profile picture of ${props.username}`} />
      </div>
      <div className="text-sm">
          <h1 className="text-white font-bold">{props.username}</h1>
          <p className="text-messageColor">{props.bio}</p>
      </div>
    </Link>
  );
};
export default ContactsModel;
