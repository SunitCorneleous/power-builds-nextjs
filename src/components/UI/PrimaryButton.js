import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, customClass }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      className={` text-white font-bold rounded-md md:text-xl ${
        customClass ? customClass : 'bg-red-500 md:p-4 p-2'
      }`}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
