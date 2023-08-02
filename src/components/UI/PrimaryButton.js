import React from "react";
import { motion } from "framer-motion";

const PrimaryButton = ({ children, customClass }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      className={`md:p-4 p-2 bg-red-500 text-white font-bold rounded-md md:text-xl ${customClass}`}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
