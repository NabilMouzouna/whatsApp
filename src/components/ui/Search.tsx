import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type Props = {}

const Search = () => {
  return (
    <div className="my-2 p-1 w-11/12 rounded-md border-[.5px] mx-auto border-messageColor flex items-center">
      <FontAwesomeIcon
        color="gray"
        size="sm"
        icon={faMagnifyingGlass}
        className="px-2"
      />
      <input
        type="text"
        className="bg-transparent text-messageColor outline-none flex-1 text-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
