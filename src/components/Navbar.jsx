import { useState } from "react";
import { FaBars, FaShare } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto p-4 flex justify-between items-center h-full">
        <div className="">
          <h1 className="text-[#00d8ff]">Defi</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="md:flex gap-5 text-white">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-1">Use Defi</button>
          </ul>
        </div>
        <div onClick={menuHandler} className="Block md:hidden">
          {showMenu ? (
            <FaShare className="text-white" size={30} />
          ) : (
            <FaBars className="text-white" size={30} />
          )}
        </div>
      </div>
      <div
        className={
          showMenu
            ? "md:hidden w-full bg-black text-white absolute top-[90px] flex justify-center items-center text-center"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <li className="text-2xl">Platform</li>
          <li className="text-2xl">Developers</li>
          <li className="text-2xl">Community</li>
          <li className="text-2xl">About</li>
          <button className="m-8">Use Defi</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
