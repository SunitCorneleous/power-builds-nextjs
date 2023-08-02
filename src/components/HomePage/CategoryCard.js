import React from "react";
import { motion } from "framer-motion";

const CategoryCard = ({ title, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      className="md:max-w-[350px] h-[250px] mt-6 rounded-md shadow-md flex flex-col  items-center justify-center bg-violet-100 cursor-pointer"
    >
      <div className="mb-2">{icon}</div>
      <h1 className="font-medium text-xl md:text-base">{title}</h1>
    </motion.div>
  );
};

export default CategoryCard;
