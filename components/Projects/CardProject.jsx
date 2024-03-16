"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function CardProject({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{ opacity: 1, scale: 1, transition: { delay: 1.5 } }}
      viewport={{ once: true }}
      className="border-2 p-4 flex-col space-y-2 rounded-lg bg-[rgb(21,22,40)] border-[rgb(133,76,230)]"
    >
      <Image
        src={item.image.src}
        alt="image"
        width={100}
        height={100}
        className="w-full rounded-md"
        unoptimized={true}
      />
      <div className="flex flex-wrap gap-2">
        {item.tech.map((e, i) => {
          return (
            <p
              key={i}
              className="text-blue-200 w-fit p-1 text-xs sm:text-sm rounded-md bg-[rgb(82,98,238)]"
            >
              {e}
            </p>
          );
        })}
      </div>

      <h1 className="text-md sm:text-lg lg:text-xl font-bold text-white">
        Project: {item.title}
      </h1>
      <p className="text-white text-sm text-justify">{item.description}</p>
      <br />
      <div className="flex justify-around">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500"
        >
          See Code
        </motion.button>
        <button className="border-2 text-[rgb(133,76,230)] border-[rgb(133,76,230)] bg-transparent hover:text-white hover:border-white hover:bg-[rgb(133,76,230)] text-sm sm:text-md p-1.5 rounded-lg font-semibold transition-colors duration-500">
          Live Demo
        </button>
      </div>
    </motion.div>
  );
}

export default CardProject;
