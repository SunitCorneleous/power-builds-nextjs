import React from "react";

const CategoryCard = ({ title, icon }) => {
  return (
    <div className="md:max-w-[350px] h-[250px] mt-6 rounded-md shadow-md flex flex-col  items-center justify-center bg-violet-100 cursor-pointer">
      <div className="mb-2">{icon}</div>
      <h1 className="font-medium text-xl">{title}</h1>
    </div>
  );
};

export default CategoryCard;
