"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import myImg from "../public/images/my_image.jpeg";
function About() {
  const appRef = useRef(null);

  useEffect(() => {
    const words = [
      "Full Stack Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Data Scientist",
    ];
    const app = appRef.current;
    const typewriter = new Typewriter(app, {
      loop: true,
      delay: 100,
    });

    typewriter
      .typeString(words[0])
      .pauseFor(500)
      .deleteChars(words[0].length)
      .typeString(words[1])
      .pauseFor(500)
      .deleteChars(words[1].length)
      .typeString(words[2])
      .pauseFor(500)
      .deleteChars(words[2].length)
      .typeString(words[3])
      .pauseFor(500)
      .deleteChars(words[3].length)
      .start();
  }, []);
  return (
    <div className="w-full h-[100vh] relative bg-[rgb(15,12,43)] flex justify-center items-center ">
      <div className="w-[100vmin] lg:w-[140vmin]  flex flex-col lg:flex-row-reverse justify-around items-center p-3 gap-2 ">
        {" "}
        <div className="flex items-center justify-center relative w-[50vmin] lg:w-96 h-[50vmin] lg:h-96">
          <div className="absolute w-[95%] h-[95%] border-[3px] border-transparent border-t-blue-500 border-b-blue-500 rounded-full border-spinner-right"></div>
          <div className="absolute w-[100%] h-[100%] border-[3px] border-transparent border-r-blue-500 border-l-blue-500 rounded-full border-spinner-left"></div>
          {/* <img
            src={myImg.src}
            alt="image"
            className="w-[88%] rounded-full z-10"
          /> */}
          <Image
            src={myImg}
            alt="my image"
            width={100}
            height={100}
            className="w-[88%] rounded-full z-10"
          />
        </div>
        <style jsx>{`
          .border-spinner-right {
            animation: spin-right 17s linear infinite;
          }

          @keyframes spin-right {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .border-spinner-left {
            animation: spin-left 17s linear infinite;
          }

          @keyframes spin-left {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }
        `}</style>
        <div
          className="text-white text-center lg:text-start lg:w-[60%] bg-[rgb(34,30,72)] z-10 rounded-lg p-4"
          style={{ boxShadow: "0px 0px 20px black" }}
        >
          <p className="text-[1.5rem] lg:text-[2.5rem] font-normal">Hi, I am</p>
          <p className="text-[1.8rem] lg:text-[3rem] font-semibold permanent-marker-regular">
            Reda Achouhad
          </p>
          <p className="text-[1.3rem] lg:text-[2rem] mb-1">
            <span ref={appRef} className="text-blue-300 font-bold"></span>
          </p>
          <p className="text-white text-center lg:text-justify text-lg">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
