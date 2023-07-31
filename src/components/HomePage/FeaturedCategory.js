import React from "react";
import CategoryCard from "./CategoryCard";
import { FiCpu, FiMonitor } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";
import {
  BsMotherboard,
  BsGpuCard,
  BsFillMouseFill,
  BsFillKeyboardFill,
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { GrStorage } from "react-icons/gr";
import { PiComputerTowerBold } from "react-icons/pi";
import Link from "next/link";

const FeaturedCategory = () => {
  const categories = [
    {
      title: "CPU / Processor",
      icon: <FiCpu size={55}></FiCpu>,
      path: "categories/cpu",
    },
    {
      title: "Motherboard",
      icon: <BsMotherboard size={55}></BsMotherboard>,
      path: "categories/motherboard",
    },
    {
      title: "RAM",
      icon: <CgSmartphoneRam size={55}></CgSmartphoneRam>,
      path: "categories/ram",
    },
    {
      title: "Power Supply Unit",
      icon: <FaPowerOff size={55}></FaPowerOff>,
      path: "categories/psu",
    },
    {
      title: "Storage Device",
      icon: <GrStorage size={55}></GrStorage>,
      path: "categories/storage",
    },
    {
      title: "Monitor",
      icon: <FiMonitor size={55}></FiMonitor>,
      path: "categories/monitor",
    },
    {
      title: "GPU",
      icon: <BsGpuCard size={55}></BsGpuCard>,
      path: "categories/gpu",
    },
    {
      title: "Mouse",
      icon: <BsFillMouseFill size={55}></BsFillMouseFill>,
      path: "categories/mouse",
    },
    {
      title: "Keyboard",
      icon: <BsFillKeyboardFill size={55}></BsFillKeyboardFill>,
      path: "categories/keyboard",
    },
    {
      title: "Casing",
      icon: <PiComputerTowerBold size={55}></PiComputerTowerBold>,
      path: "categories/casing",
    },
  ];

  return (
    <div className="mb-14">
      <h1 className="text-2xl font-bold text-primary ">Featured Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5">
        {categories.map((item, i) => (
          <Link href={item.path} key={i}>
            <CategoryCard title={item.title} icon={item.icon} key={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
