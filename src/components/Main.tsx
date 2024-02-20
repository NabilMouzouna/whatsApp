import MainContent from "./MainContent/MainContent";
import Navigation from "./Navigation/Navigation";
import SideContact from "./SideSection/SectionSide";
const Main = () => {
  return (
    <div className="flex">
      <Navigation />
      <SideContact />
      <MainContent />
    </div>
  );
};

export default Main;
