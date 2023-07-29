import React from 'react';
import DropDown from './components/DropDown';
import PrimaryButton from '@/components/UI/PrimaryButton';
import PageContainer from '@/components/UI/PageContainer';

const RootLayout = ({ children }) => {
  return (
    <div className=''>
      {/* header */}
      <div className='flex justify-between items-center  md:w-[85%] md:mx-auto md:py-6 py-4 px-4'>
        {/* logo and categories */}
        <div className='flex items-center'>
          <h1 className='font-bold text-3xl text-primary'>LOGO</h1>

          <DropDown />
        </div>

        {/* pc builder button and login */}
        <div>
          <PrimaryButton customClass=''>PC Builder</PrimaryButton>
        </div>
      </div>

      {/* content */}

      <PageContainer>{children}</PageContainer>
    </div>
  );
};

export default RootLayout;
