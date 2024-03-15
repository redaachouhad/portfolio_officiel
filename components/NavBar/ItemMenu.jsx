"use client";

import { Link as ScrollLink } from "react-scroll";
function ItemMenu({ title, url, handleClickMenuHeight }) {
  const handleOnClick = () => {
    handleClickMenuHeight("h-0");
  };

  return (
    <ScrollLink
      onClick={handleOnClick}
      activeClass="active"
      to={url}
      spy={true}
      smooth={true}
      offset={-50} // Adjust as needed for header height
      duration={500}
      className="cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
}

export default ItemMenu;
