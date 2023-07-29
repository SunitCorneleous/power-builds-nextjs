import React from 'react';
import CategoryCard from './CategoryCard';
import { FiCpu, FiMonitor } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import {
  BsMotherboard,
  BsGpuCard,
  BsFillMouseFill,
  BsFillKeyboardFill,
} from 'react-icons/bs';
import { CgSmartphoneRam } from 'react-icons/cg';
import { GrStorage } from 'react-icons/gr';
import { PiComputerTowerBold } from 'react-icons/pi';

const FeaturedCategory = () => {
  const categories = [
    {
      title: 'CPU / Processor',
      icon: <FiCpu size={55}></FiCpu>,
    },
    {
      title: 'Motherboard',
      icon: <BsMotherboard size={55}></BsMotherboard>,
    },
    {
      title: 'RAM',
      icon: <CgSmartphoneRam size={55}></CgSmartphoneRam>,
    },
    {
      title: 'Power Supply Unit',
      icon: <FaPowerOff size={55}></FaPowerOff>,
    },
    {
      title: 'Storage Device',
      icon: <GrStorage size={55}></GrStorage>,
    },
    {
      title: 'Monitor',
      icon: <FiMonitor size={55}></FiMonitor>,
    },
    {
      title: 'GPU',
      icon: <BsGpuCard size={55}></BsGpuCard>,
    },
    {
      title: 'Mouse',
      icon: <BsFillMouseFill size={55}></BsFillMouseFill>,
    },
    {
      title: 'Keyboard',
      icon: <BsFillKeyboardFill size={55}></BsFillKeyboardFill>,
    },
    {
      title: 'Casing',
      icon: <PiComputerTowerBold size={55}></PiComputerTowerBold>,
    },
  ];

  return (
    <div className='py-6'>
      <h1 className='text-2xl font-bold text-primary'>Featured Categories</h1>
      <div className='grid grid-cols-2 md:grid-cols-5 md:gap-5'>
        {categories.map((item, i) => (
          <CategoryCard title={item.title} icon={item.icon} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
