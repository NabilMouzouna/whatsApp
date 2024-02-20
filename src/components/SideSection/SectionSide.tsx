import ContactsBtn from "../ui/ContactsBtn";
import SideSectionRoutes from "./SideSectionRoutes";

const SideContact = () => {
  return (
    <div className="w-1/3 bg-asideColor h-screen relative ">
      <div className="pt-14">
        <SideSectionRoutes />
        <ContactsBtn />
      </div>
    </div>
  );
};

export default SideContact;
