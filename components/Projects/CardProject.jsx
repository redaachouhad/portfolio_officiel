"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import project from "./../../public/images/project1.png";
function CardProject() {
  return (
    <div className="border-2 p-4 flex-col space-y-2 rounded-lg bg-[rgb(21,22,40)] border-[rgb(133,76,230)]">
      <Image
        src={project.src}
        alt="image"
        width={100}
        height={100}
        className="w-full rounded-md border-2 border-[rgb(133,76,230)]"
        unoptimized={true}
      />
      <div className="flex flex-wrap gap-2">
        <p className="text-blue-200 w-fit p-1 text-xs sm:text-sm rounded-md bg-[rgb(97,96,156)]">
          Html
        </p>
        <p className="text-blue-200 w-fit p-1 text-xs sm:text-sm rounded-md bg-[rgb(97,96,156)]">
          Javascript
        </p>
      </div>

      <h1 className="text-md sm:text-lg lg:text-xl font-bold text-white">
        Project: Hello World
      </h1>
      <p className="text-white text-sm text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      <div className="flex justify-around">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500"
        >
          See Code
        </motion.button>
        <button className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500">
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default CardProject;
