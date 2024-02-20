import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCircleDot,
  faGear,
  faMessage,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const NavLinks = [
  {
    label: "Messages",
    icon: faMessage,
    link: "/messages",
  },
  {
    label: "Calls",
    icon: faPhone,
    link: "/calls",
  },
  {
    label: "Stories",
    icon: faCircleDot,
    link: "/stories",
  },
  {
    label: "Archived",
    icon: faBoxArchive,
    link: "/archived",
  },
  {
    label: "Starred",
    icon: faStar,
    link: "/starred",
  },
];
const Navigation = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-headerColor px-3 py-10">
      <nav className="grid place-content-center">
        {NavLinks.map((navLink) => (
          <Link
            to={navLink.link}
            key={navLink.label}
            aria-label={navLink.label}
            className="px-6 py-3 text-center my-1 focus:bg-bodyColor rounded-md text-messageColor"
          >
            <FontAwesomeIcon icon={navLink.icon} />
          </Link>
        ))}
      </nav>
      <Link
        to="/settings"
        className="px-6 py-3 rounded-md text-center focus:bg-bodyColor text-messageColor"
      >
        <FontAwesomeIcon icon={faGear} />
      </Link>
    </div>
  );
};

export default Navigation;
