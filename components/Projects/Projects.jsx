"use client";
import Image from "next/image";
import project from "./../../public/images/project1.png";
function Projects() {
  return (
    <div
      id="#projects"
      className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden"
    >
      <h1 className="text-white text-[1.5rem] md:text-[1.8rem] lg:text-[2.3rem] mb-5">
        🌟 Projects
      </h1>
      <br />

      <div className="w-[85vmin] sm:w-[92vmin] md:w-[96vmin] lg:w-[130vmin] z-10 h-fit relative grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-10 sm:gap-8">
        <div className="border-2 p-4 flex-col space-y-2 rounded-lg bg-[#111125]">
          <Image
            src={project.src}
            alt="image"
            width={100}
            height={100}
            className="w-full rounded-md"
            unoptimized={true}
          />
          {/* <div></div> */}
          <h1 className="text-md sm:text-lg lg:text-xl font-bold text-white">
            Project: Hello World
          </h1>
          <p className="text-white text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-between">
            <button>View Code</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="border p-2"></div>
        <div className="border p-2"></div>
        <div className="border p-2"></div>
      </div>
    </div>
  );
}

export default Projects;
