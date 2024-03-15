"use client";
import { dataExperiences } from "@ext/utils/data";
import Card from "./Card";

function Experiences() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden">
      <h1 className="text-white text-[1.7rem] md:text-[2rem] lg:text-[3rem] mb-5">
        🧑🏻‍💼 Experiences
      </h1>
      <br />

      <div className="w-[82.5vmin] sm:w-[95vmin] lg:w-[70vmin] flex-col items-center justify-center z-10 h-fit relative">
        <div
          className="border-2 h-full border-red-800 absolute top-0 left-0  rounded-full"
          style={{ boxShadow: "0px 0px 3px rgba(0,0,255,0.8)" }}
        ></div>
        <br />
        <br />
        <br />
        <br />
        <Card item={dataExperiences[0]} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card item={dataExperiences[1]} />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Experiences;
