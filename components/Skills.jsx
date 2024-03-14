"use client";

import SplineModel from "./SplineModel";

function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden">
      <br />
      <br />
      <h1 className="text-white text-[1.7rem] md:text-[2rem] lg:text-[3rem] mb-5">
        🧑🏻‍💻 Skills
      </h1>
      <br />

      <div className="w-[82.5vmin] sm:w-[95vmin] lg:w-[100vmin] xl:w-[120vmin]  z-10 h-fit relative grid grid-cols-2 gap-8">
        <div className="h-20 ring"></div>
        <div className="h-20 ring"></div>
        <div className="h-20 ring"></div>
      </div>
      <div className="w-full h-[50rem]">
        <SplineModel />
      </div>
    </div>
  );
}

export default Skills;
