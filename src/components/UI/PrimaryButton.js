import React from 'react';

const PrimaryButton = ({ children, customClass }) => {
  return (
    <button
      className={`md:p-4 p-2 bg-red-500 text-white font-bold rounded-md md:text-xl ${customClass}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
