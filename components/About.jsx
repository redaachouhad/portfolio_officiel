"use client";
import { motion } from "framer-motion";
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
      .pauseFor(200)
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
    <div className="w-full h-[100vh] relative bg-[rgb(7,5,25)] flex justify-center items-center overflow-hidden">
      <div className="w-[90vmin] lg:w-[140vmin]  flex flex-col lg:flex-row-reverse justify-around items-center p-3 lg:gap-2 gap-10">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          className="flex items-center justify-center relative w-[48vmin] lg:w-96 h-[48vmin] lg:h-96"
        >
          <div className="absolute w-[93%] h-[93%] border-[3px] border-transparent border-t-blue-500 border-b-blue-500 rounded-full border-spinner-right"></div>
          <div className="absolute w-[100%] h-[100%] border-[3px] border-transparent border-r-blue-500 border-l-blue-500 rounded-full border-spinner-left"></div>
          <Image
            src={myImg.src}
            alt="my image"
            width={50}
            height={50}
            className="w-[83%] rounded-full z-10"
            unoptimized={true}
            priority
          />
        </motion.div>
        <style jsx>{`
          .border-spinner-right {
            animation: spin-right 10s linear infinite;
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
            animation: spin-left 10s linear infinite;
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
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          className="text-white text-center lg:text-start lg:w-[60%] bg-[rgb(33,27,105)] z-10 rounded-lg p-4"
          // style={{ boxShadow: "0px 0px 10px 4px #5d2b6555" }}
        >
          <p className="text-[1.2rem] lg:text-[2rem] font-normal flex-col items-center">
            Hi👋 , I am
          </p>
          <p className="text-[1.3rem] lg:text-[2.5rem] font-semibold sail-regular">
            Reda Achouhad
          </p>
          <p className="text-[1.2rem] lg:text-[1.7rem] mb-1">
            <span ref={appRef} className="text-blue-300 font-bold"></span>
          </p>
          <p className="text-white text-center lg:text-justify text-sm lg:text-lg">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>

          <div className="flex justify-center mt-3">
            <button className="p-1.5 rounded-lg bg-blue-800 font-bold shadow-md shadow-black">
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
