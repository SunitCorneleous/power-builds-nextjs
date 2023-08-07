import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import Component from './components/Component';
import { FiCpu, FiMonitor } from 'react-icons/fi';
import { BsMotherboard } from 'react-icons/bs';
import { CgSmartphoneRam } from 'react-icons/cg';
import { FaPowerOff } from 'react-icons/fa';
import { MdStorage } from 'react-icons/md';
import { checkComponents } from '@/utils/checkComponents';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const PcBuilderPage = () => {
  const { components } = useSelector(state => state.pcBuilder);
  const rourter = useRouter();

  const allComponents = [
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

        {allComponents.map((item, i) => (
          <Component
            icon={item.icon}
            key={i}
            title={item.title}
            query={item.query}
          />
        ))}
      </div>

      <button
        className={`${
          checkComponents(components) ? 'bg-slate-500' : 'bg-red-600'
        } text-white font-semibold px-4 py-2 rounded-md mt-4 block mx-auto`}
        disabled={checkComponents(components)}
        onClick={() => {
          toast('Build Complete');
          rourter.push('/');
        }}
      >
        Complete Build
      </button>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
