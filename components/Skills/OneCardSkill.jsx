import { motion } from "framer-motion";
import OneSkill from "./OneSkill";
function OneCardSkill({ title, items, range }) {
  const initialization =
    range % 2 == 0 ? { opacity: 0, x: -80 } : { opacity: 0, x: 80 };
  return (
    <motion.div
      initial={initialization}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.5, type: "linear" },
      }}
      viewport={{ once: true }}
      className="h-full p-4 flex flex-col rounded-xl border-2 border-[#7c72c5]"
    >
      <h1 className="text-white text-center text-lg sm:text-xl font-semibold">
        {title}
      </h1>
      <br />
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {items.map((e, index) => {
          return <OneSkill key={index} imageSrc={e.imageSrc} name={e.name} />;
        })}
      </div>
    </motion.div>
  );
}

export default OneCardSkill;
