"use client";
import { dataSkills } from "@ext/utils/data";
import OneCardSkill from "./OneCardSkill";
function Skills() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden">
      <br />
      <br />
      <h1 className="text-white text-[1.7rem] md:text-[2rem] lg:text-[3rem] mb-5">
        🧑🏻‍💻 Skills
      </h1>
      <br />

      <div className="w-[85vmin] sm:w-[90vmin] lg:w-[100vmin] z-10 h-fit relative grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-10 sm:gap-8">
        {/* <OneCardSkill title={"Frontend"} />
        <OneCardSkill title={"Backend"} />
        <OneCardSkill title={"Data Science"} />
        <OneCardSkill title={"Others"} /> */}
        {dataSkills.map((e, index) => {
          return <OneCardSkill key={index} title={e.title} items={e.items} />;
        })}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Skills;
