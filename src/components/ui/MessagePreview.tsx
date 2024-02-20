import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { message } from "../../lib/dataTypes"

type MessagePreviewProps = {
  roomId : string,
  user : any,
  message : message[],
}
export const MessagePreview = (props:MessagePreviewProps) => {
  const ProfilePicture_Placeholder: ReactElement = (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="12" cy="6" r="4" fill="#ffffff"></circle>{" "}<ellipse cx="12" cy="17" rx="7" ry="4" fill="#ffffff"></ellipse>{" "}</g>
</svg>
  );
  const userProfile = (props.user.profilePictureURL)? <img className="w-full h-full object-cover" src={props.user.profilePictureURL} alt="" /> : ProfilePicture_Placeholder
  return (
    <Link
      key={props.roomId}
      to={`${props.roomId}`}
      className="focus:bg-bodyColor hover:bg-bodyColor hover:bg-opacity-35 h-20 my-1 mx-2 p-2 rounded-md flex items-center cursor-default"
    >
      <div>
        <div className="w-14 h-14 overflow-hidden rounded-full bg-gray-500">
          {/* //TODO: need to add profile image in case there is a profile */}
          {userProfile}
        </div>
      </div>
      <div className="text-sm mx-2 w-11/12">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white font-bold">{props.user.username}</h1>
          <h1 className="text-white">{props.message[props.message.length - 1].timestamp}</h1>
        </div>
        <p className="text-messageColor mt-1 overflow-x-clip">
          {props.message[props.message.length - 1].content}
        </p>
      </div>
    </Link>
  );
};
export default MessagePreview;
