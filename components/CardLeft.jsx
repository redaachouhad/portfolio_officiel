"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
function CardLeft({ item }) {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <div className="w-full flex justify-end sm:justify-start">
      <div className="w-[100%] sm:w-[50%] h-full flex flex-row-reverse sm:flex-row ">
        <motion.div
          initial={{ x: isSmallScreen ? 20 : -40, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 2 },
          }}
          viewport={{ once: true }}
          className="w-full p-6 bg-[rgb(30,27,69)] border-blue-500 border-2 rounded-lg"
        >
          <h1 className="text-white text-lg sm:text-xl font-semibold mb-1">
            {item?.nameOfSchool}
          </h1>
          <p className="text-blue-400 text-xs sm:text-sm font-bold">
            {item?.place}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 font-semibold">
            {item?.date}
          </p>

          <p className="text-white text-xs sm:text-sm mt-2 text-justify">
            {item?.description}
          </p>
          <div className="text-white text-xs sm:text-sm mt-4 flex items-center">
            <motion.div className="w-0 h-0 border-[0.3rem] border-transparent border-l-blue-300"></motion.div>
            <span className="text-blue-300 font-medium underline-blue-300 underline">
              {" "}
              Obtained diplomas:
            </span>
          </div>
          {item?.diplomas.map((element, index) => {
            return (
              <li
                key={index}
                className="text-white text-xs sm:text-sm font-medium "
              >
                {element}
              </li>
            );
          })}
        </motion.div>
        <div className="flex w-12 relative flex-row-reverse sm:flex-row">
          <motion.div
            initial={{ x: 0, y: 24, opacity: 0 }}
            whileInView={{
              x: 0,
              y: 24,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }}
            viewport={{ once: true }}
            className="w-0 h-0 border-[0.45rem] border-transparent border-r-blue-500 sm:border-l-blue-500 sm:border-transparent translate-y-12"
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
              x: isSmallScreen ? "-50%" : "50%",
              y: "0",
            }}
            whileInView={{
              scale: 1,
              x: isSmallScreen ? "-50%" : "50%",
              y: "0",
              transition: {
                duration: 0.9,
                delay: 0.9,
              },
            }}
            viewport={{ once: true }}
            className="w-14 h-14 border-[4px] border-blue-800 rounded-full absolute top-0 left-0 sm:left-auto right-auto sm:right-0"
            style={{
              backgroundImage: `url(${item?.imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></motion.div>
          <motion.span
            initial={{ y: "0", x: 120, opacity: 0 }}
            whileInView={{
              y: "0",
              x: 40,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.9 },
            }}
            viewport={{ once: true }}
            className="w-24 h-14 absolute translate-y-1/2 left-full translate-x-12 sm:flex sm:justify-center sm:items-center hidden text-blue-300  font-semibold"
          >
            {item?.date}
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default CardLeft;
