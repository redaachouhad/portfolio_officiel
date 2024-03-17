"use client";
import { dataProjects } from "@ext/utils/data";
import CardProject from "./CardProject";
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

      <div className="w-[85vmin] sm:w-[92vmin] md:w-[96vmin] lg:w-[120vmin] xl:w-[150vmin] z-10 h-full relative grid grid-cols-1 sm:grid-cols-2  gap-10 sm:gap-8">
        {dataProjects.map((item, index) => {
          return <CardProject key={index} item={item} />;
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Projects;
