import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type headerBar = {
  component: React.ReactNode | null;
  icons: IconDefinition[];
};

const Header = (props: headerBar) => {
  return (
    <div className="absolute top-0 right-0 h-14 bg-black bg-opacity-50 w-full flex justify-between items-center px-4 text-messageColor">
      {props.component}
      <nav className="flex items-center">
        {props.icons.map((icon) => (
          <div
            key={crypto.randomUUID()}
            className="rounded-md px-2 mx-3 hover:bg-bodyColor"
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;
