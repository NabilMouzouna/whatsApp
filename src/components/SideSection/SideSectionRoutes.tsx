import Search from "../ui/Search";
import Header from "../ui/Header";
import MessagePreview from "../ui/MessagePreview";
import { getAllRooms, getUserById } from "../../lib/methods/UserMethods";
import { Route, Routes } from "react-router-dom";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { isAuthenticated } from "../../lib/actions";
import { getChatRoomById, getParticipantsIds } from "../../lib/methods/RoomMethods";


const SideSectionRoutes = () => {
  const me = isAuthenticated()
  const RoomsIDs = getAllRooms(me?.userId)
  const Rooms = (RoomsIDs)? getChatRoomById(...RoomsIDs) : undefined
  return (
    <Routes>
        <Route path="/messages/*" element={<>
        <HeaderAndSearch component={<h1 className="text-white font-bold">Messages</h1>}/>
          {Rooms && Rooms.map((Room) => {
            const participants = getParticipantsIds(Room.roomID)
            let user= (Room) && (participants) && getUserById(participants[0])
            if(user && Room) return (
              <MessagePreview key={Room.roomID} roomId={Room.roomID} user={user} message={Room.messages}/>
            )
          })}
        </>}/>
        <Route path="/calls/*" element={<HeaderAndSearch component={<h1 className="text-white font-bold">Calls</h1>}/>}/>
        <Route path="/stories/*" element={<HeaderAndSearch component={<h1 className="text-white font-bold">Stories</h1>}/>}/>
        <Route path="/archived/*" element={<HeaderAndSearch component={<h1 className="text-white font-bold">Archived Messages</h1>}/>}/>
        <Route path="/starred/*" element={<HeaderAndSearch component={<h1 className="text-white font-bold">Starred Messages</h1>}/>}/>
        <Route path="/settings/*" element={<Header component={<h1 className="text-white font-bold">Settings</h1>} icons={[faBarsStaggered]}/>}/>
    </Routes>
  )
}

type HeaderAndSearchProps = {
    component: React.ReactNode
}
const HeaderAndSearch = (props:HeaderAndSearchProps) => { 
    return (
        <>
            <Header
              component={props.component}
              icons={[faBarsStaggered]}
            />
            <Search />
         </>
    )
 }
export default SideSectionRoutes
