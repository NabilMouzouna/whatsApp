import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ContactsModel from "./ContactsModel";

const ContactsBtn = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      {!opened && (
        <button
          onClick={() => {
            setOpened(true);
          }}
          className="absolute bottom-5 right-5 rounded-full w-14 h-14 p-4 grid place-content-center bg-green-500 z-30 cursor-pointer"
        >
          <FontAwesomeIcon size="lg" color="white" icon={faMessage} />
        </button>
      )}
      {opened && (
        <ContactsModel openedController={setOpened} openState={opened} />
      )}
    </>
  );
};

export default ContactsBtn;
