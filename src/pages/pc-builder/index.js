import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import React from 'react';
import Component from './components/Component';
import { FiCpu, FiMonitor } from 'react-icons/fi';
import {
  BsFillKeyboardFill,
  BsFillMouseFill,
  BsGpuCard,
  BsMotherboard,
} from 'react-icons/bs';
import { CgSmartphoneRam } from 'react-icons/cg';
import { FaPowerOff } from 'react-icons/fa';
import { MdStorage } from 'react-icons/md';

const PcBuilderPage = () => {
  const components = [
    {
      title: 'CPU / Processor',
      icon: <FiCpu size={35}></FiCpu>,
      query: 'cpu',
    },
    {
      title: 'Motherboard',
      icon: <BsMotherboard size={35}></BsMotherboard>,
      query: 'motherboard',
    },
    {
      title: 'RAM',
      icon: <CgSmartphoneRam size={35}></CgSmartphoneRam>,
      query: 'ram',
    },
    {
      title: 'Power Supply Unit',
      icon: <FaPowerOff size={35}></FaPowerOff>,
      query: 'psu',
    },
    {
      title: 'Storage Device',
      icon: <MdStorage size={35}></MdStorage>,
      query: 'storage',
    },
    {
      title: 'Monitor',
      icon: <FiMonitor size={35}></FiMonitor>,
      query: 'monitor',
    },
  ];

  return (
    <div>
      <h1 className='text-xl md:text-4xl font-semibold text-primary text-center'>
        Build your dream PC on your own
      </h1>

      <div className='mt-12 md:w-[85%] mx-auto'>
        <h2 className='text-2xl text-primary'>
          Select your desired components
        </h2>

        {/* components */}

        {components.map((item, i) => (
          <Component
            icon={item.icon}
            key={i}
            title={item.title}
            query={item.query}
          />
        ))}
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
