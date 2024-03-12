"use client";

import { itemMenu } from "@ext/utils/data";
import { useState } from "react";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { PiFlowerLotusLight } from "react-icons/pi";
import ItemMenu from "./ItemMenu";

function NavBar() {
  const [heightMenu, setHeightMenu] = useState("h-0");
  const handleClickMenuHeight = () => {
    console.log(heightMenu);
    if (heightMenu === "h-0") {
      setHeightMenu("h-[32rem]");
    } else {
      setHeightMenu("h-0");
    }
  };
  return (
    <div className="fixed left-0 top-0 w-full text-white bg-[rgb(35,26,83)] px-4 sm:px-6 md:px-10 py-2 flex justify-between items-center z-50">
      <div className="flex items-center justify-center w-fit gap-2">
        <PiFlowerLotusLight className="text-2xl md:text-3xl font-semibold" />
        <span className="text-lg md:text-2xl font-semibold">Portfolio</span>
      </div>
      <div
        className="h-fit w-fit cursor-pointer"
        onClick={handleClickMenuHeight}
      >
        <IoMenu className="text-2xl visible lg:hidden" />
      </div>

      <div
        className={`absolute lg:static top-full lg:top-auto left-0 lg:left-auto w-full lg:w-fit overflow-hidden transition-height duration-500 ease ${heightMenu} lg:h-fit`}
      >
        <div className="flex lg:flex-row flex-col gap-10 py-6 lg:py-0 w-full lg:w-fit items-center bg-[rgba(0,0,0,0.7)] lg:bg-transparent backdrop-blur-lg">
          {itemMenu.map((item, index) => {
            return <ItemMenu key={index} title={item.title} url={item.url} />;
          })}
          <button className="border-2 border-white flex gap-1 items-center p-2 rounded-lg bg-black">
            <IoLogoGithub className="text-xl" /> <span>Github Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
