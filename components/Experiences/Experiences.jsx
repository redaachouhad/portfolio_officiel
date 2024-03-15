"use client";
import { dataExperiences } from "@ext/utils/data";
import Card from "./Card";

function Experiences() {
  return (
    <div
      id="#experiences"
      className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden"
    >
      <h1 className="text-white text-[1.7rem] md:text-[1.8rem] lg:text-[2.3rem] mb-5">
        🧑🏻‍💼 Experiences
      </h1>
      <br />

      <div className="w-[82vmin] sm:w-[80vmin] lg:w-[70vmin] flex-col items-center justify-center z-10 h-fit relative">
        <div className="border-2 h-full border-red-500 absolute top-0 left-0  rounded-full"></div>

        <br />
        <br />
        <Card item={dataExperiences[0]} />
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
