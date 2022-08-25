import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";
import { HiLocationMarker, HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Navigation() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((o) => !o);
  };
  return (
    <nav className="container mx-auto flex items-center gap-5 p-2">
      <Link to="/" className="text-red-500 flex items-center gap-2">
        <div className="w-8">
          <img
            src="./android-chrome-192x192.png"
            alt="Tomato Logo"
            className="w-full object-cover"
          />
        </div>
        <h3 className="font-nunito font-bold text-2xl">Tomato</h3>
      </Link>
      <form
        className={`${
          menu
            ? "w-full flex flex-wrap gap-4 absolute left-0 top-16 bg-white"
            : " w-3/5 hidden "
        } shadow-md md:flex items-center rounded-lg py-2 px-3`}
      >
        <div
          className={`${
            menu
              ? "w-full justify-start border-b pb-3"
              : "w-56 justify-between border-r-2"
          } flex items-center  pr-3 `}
        >
          <span className="mr-1 text-red-400 cursor-pointer">
            <HiLocationMarker />
          </span>
          <span className="mr-3 text-gray-500">Dhaka Bangladesh</span>
          <BsCaretDownFill className="cursor-pointer" />
        </div>
        <label
          htmlFor="search"
          className="w-2/4 flex flex-auto items-center justify-between"
        >
          <button className="text-gray-500 px-2">
            <BiSearch />
          </button>

          <input
            id="search"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full placeholder:truncate "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
      <label for="profile" className="flex items-center ml-auto">
        <div className="w-5">
          <img src="./assets/user.png" alt="" className="w-full" />
        </div>
        <select
          id="profile"
          className="text-gray-900 font-semibold p-2 focus:outline-none w-0 md:w-full"
        >
          <option value="" className="font-semibold focus:bg-red-500">
            Rashad Stack
          </option>
          <option value="" className="font-semibold">
            Privacy
          </option>
          <option value="" className="font-semibold">
            Logout
          </option>
        </select>
      </label>
      <button className="md:hidden text-red-400" onClick={handleMenu}>
        {menu ? <IoMdClose size={30} /> : <HiMenuAlt1 size={30} />}
      </button>
    </nav>
  );
}

export default Navigation;
