"use client";
import { dataSkills } from "@ext/utils/data";
import OneCardSkill from "./OneCardSkill";
function Skills() {
  return (
    <div
      id="#skills"
      className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden"
    >
      <br />
      <br />
      <h1 className="text-white text-[1.5rem] md:text-[1.8rem] lg:text-[2.3rem] mb-5">
        🧑🏻‍💻 Skills & Technologies
      </h1>
      <br />

      <div className="w-[85vmin] sm:w-[90vmin] lg:w-[100vmin] z-10 h-fit relative grid grid-cols-1 sm:grid-cols-2  gap-10 sm:gap-8">
        {dataSkills.map((e, index) => {
          return (
            <OneCardSkill
              key={index}
              title={e.title}
              items={e.items}
              range={index}
            />
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Skills;
