import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Routes,Route} from "react-router-dom"
import ChatRoom from "./ChatRoom";
const MainContent = () => {
  return (
    <Routes>
      <Route path="messages/:roomId" element={<ChatRoom />}/>
      <Route path="*" element={<InitialPage/>}/>
    </Routes>
  );
};

const InitialPage = () => {
  return (
    <div className="bg-bodyColor w-2/3 text-messageColor relative overflow-y-scroll">
      <main>
        <div className="flex flex-col justify-center items-center h-screen">
          <FontAwesomeIcon size="4x" icon={faWhatsapp} />
          <h1 className="my-3 text-2xl">WhatsApp Application</h1>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
